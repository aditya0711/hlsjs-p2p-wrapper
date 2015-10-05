import XhrLoader from '../src/utils/xhr-loader.js';

class P2PLoader extends XhrLoader {
  /*
  NOTES: 
    - Range requests can be implemented using xhr-setup.
    - Need to fix stats object
  */

  /* 
NOTES for Mangui:
  - need to pass 'hls' in the constructor
  - if segment is locked, we call onTimeout. Is there a particular logic in this function that we should be aware of (downswitch for example)?
*/

  load(url, responseType, onSuccess, onError, onTimeout, timeout, maxRetry, retryDelay, onProgress = null, frag = null) {
    if (frag) {
      this.p2pSegment = this.hls.srModule.getP2PData(Object.assign({},frag));
      this.onSuccessCallback = onSuccess;

      if (this.p2pSegment.isLocked()) {
        console.warn('segment locked. Retrying later');
        setTimeout(() => {
          this.load(url, responseType, onSuccess, onError, onTimeout, timeout, maxRetry, retryDelay, onProgress, frag);
        }, 100);
      }  else if (this.p2pSegment.isComplete()) {
        this.p2pSegment.getFullSegment({}, this.fullP2PSuccess.bind(this), this.loaderror.bind(this));
        return;
      } else {
        this.range = this.p2pSegment.getUpdatedRange();
      }

      super.load(url, responseType, this.cdnLoadSuccess, onError, onTimeout, timeout, maxRetry, retryDelay, onProgress = null);
    } else {
      super.load(url, responseType, onSuccess, onError, onTimeout, timeout, maxRetry, retryDelay, onProgress = null);
    }


  }

  cdnLoadSuccess(event, stats) {
    var response = event.currentTarget.response;
    //stats.length = payload.byteLength; // TODO: fix stats
    this.p2pSegment.getFullSegment({response: response, dlSpeed: 0}, this.p2pLoadSuccess.bind(this), this.onError.bind(this));
  }

  p2pLoadSuccess(event, segment) {
    event.currentTarget = { response: event.response.slice(0) };

    var stats = {}; // TODO: fix stats
    this.onSuccessCallback(event, stats);
  }
  
  fullP2PSuccess(event, segment) {
    //getFullSegment calls this callback synchronously in the case of full P2P. Need to make it asynchronous, so that buffer-controller can update its state
    //TODO: remove that once we've done it inside the P2P module
    setTimeout(() => {
      this.p2pLoadSuccess(event, segment)
    }, 100);
  }


}

export default P2PLoader;