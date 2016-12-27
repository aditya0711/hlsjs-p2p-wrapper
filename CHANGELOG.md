# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This changelog's template come from [keepachangelog.com](http://keepachangelog.com/). When editing this document, please follow the convention specified there.

## [Dev]
### Changed
- Replaced Grunt with Webpack.

## [Unreleased]

## [4.1.5] - 2016-12-19
- Patch for abandon request rule corner case

## [4.1.1] - 2016-12-09
### Changed
- Wrapper.peerAgent now returns `null` if peer agent module is not initialized yet.

## [4.1.0] - 2016-12-07
### Changed
- Changed bundled hls.js version from v0.5.46 to v0.6.12.

## [4.0.0] - 2016-12-06
### Added
- Wrapper instance version getter.
- Wrapper now supports hls.js up to version v0.6.12.

### Changed
- Wrapper instantiation: Hlsjs class injection replaced by hls.js instance injection. Wrapper can be initialized at any time of hls.js lifecycle(even after hls.js started playback) now.
- Accessing peer agent public API: wrapper instance getters/setters `stats`, `p2pDownloadOn`, `p2pUploadOn` were removed, peer agent public API getter was introduced instead. -- `wrapper.peerAgent`. The list of getters it exposes: `wrapper.peerAgent.version` -- peer agent version, `wrapper.peerAgent.stats`, `wrapper.peerAgent.isP2PEnabled`. Getters/setters: `wrapper.peerAgent.p2pDownloadOn`, `wrapper.peerAgent.p2pUploadOn`;

### Removed
- Due to simplifed wrapper creation, its methods `createMediaEngine`, `createPlayer`, `createSRModule`, `createPeerAgent` were removed.

## [3.9.1] - 2016-11-17
- Add back liveSyncDuration default override when we control hls.js instantiation

## [3.9.0] - 2016-11-16
### Removed
- Remove liveMinBufferMargin. It is now handled by the peer-agent

## [3.8.1] - 2016-11-10
- Expect HttpError instance passed in loadError callback

## [3.8.0] - 2016-11-07
### Fixed
- Fix issue with redundant levels: handle levels' backup urls as separate tracks

## [3.7.13] - 2016-11-07
### Updated
- Bundles hls.js 0.5.46

## [3.7.12] - 2016-11-03
### Updated
- hls.js to 0.6.1.

## [3.7.0] - 2016-09-20

### Added
- p2pDownloadOn and p2pUploadOn properties on public API
- `version` getter on HlsjsP2PWrapper constructor
- `type` property on `TrackView` (required for peer-agent asynchronous loading)

## [3.6.9] - 2016-09-05

### Updated
- hls.js to 0.5.46

## [3.6.8] - 2016-08-19
### Updated
- hls.js to 0.5.44

## [3.6.4] - 2016-07-29
### Added
- Support for `xhrSetup` in Hls.js config via BaseXHR class from xhr-shaper project. Only supports `withCredentials` and `setRequestHeader` in this implementation.

## [3.6.0] - 2016-07-25
### Added
- Pass media element to peer-agent

## [3.5.4] - 2016-07-11
### Fixed
- fixed toolkit (merge of master in dev failed because of fast forward)

## [3.5.3] - 2016-07-11
### Changed
- Publish npm dist as rc when comming from master

## [3.5.0] - 2016-07-08
### Updated
- hls.js to 0.5.40

### Added
- Error message in example page

### Changed
- P2P loader (not doing XHRs anymore)
- Copy lib folder to wrapper dist before NPM publish (for internal testing usage)

### Fixed
- Fixed race condition in retry logic
- P2PLoader integration tests, fixed monkey-patching Hls.js instance for setup
- Fixed example pages failover on Safari

### Removed
- XHR loader

## [3.3.0] - 2016-06-28
### Added
- Expose peer-agent public stats api in HlsjsP2PWrapper.

## [3.2.5] - 2016-06-28
### Changed
- Replace the old optional method `getNextSegmentView` by `getSegmentDuration`

## [3.2.0] - 2016-06-21
### Changed
- Hls.js version upgraded to 0.5.39 (fixes issues with Apple streams on Firefox) and updated bandwidth estimation integration tests

### Fixed
- Fixed regression in P2P-loader retrying routine (missing to clear timeout after fixing initial bug around calling abort function on handling errors)

## [3.0.4] - 2016-06-15
### Fixed
- Change bundle name in banner

## [3.0.3] - 2016-06-14
### Added
- getId() method in SegmentView to identify segments
- getTracksList() is now getTrackList()

### Changed
- Pass HLS streamType to PeerAgent constructor.
- Custom headers are now in JSON format
- Remove contentUrl formatting. Expect optional contentId in p2pConfig, except for deprecated method createSRModule
- Rely on streamroot-p2p v4.x
- uglify the bundle and remove console.log in it.

## [2.0.8] - 2016-05-11
### Added
- Grunt tasks to build module and `createWrappedHls` helper.

### Changed
- Publish only minified files contained in `dist` folder.

## [2.0.8] - 2016-05-02
### Fixed
- Hotfix for P2P-227 - Don't use P2P loader for encryption keys or playlists

## [2.0.7] - 2016-04-28
### Changed
- Fix P2P bandwidth feedback to abr-controller: timing metrics are calculated on progress

## [2.0.6] - 2016-04-11
### Changed
- Fix optionnal method used by debug tool

## [2.0.5] - 2016-04-05
### Changed
- Use `liveSyncDuration` as max buffer level when available

## [2.0.4] - 2016-03-29
### Changed
- allow passing a custom content id in createSRModule (optional: defaults to hls.url)

## [2.0.3] - 2016-03-18
### Changed
- rename custom object for withCredentials and headers from xhr to request

## [2.0.2] - 2016-03-16
### Changed
- Fix retry loop on download abort (it was breaking the PTS drift calculation and crashing hls.js)

## [2.0.1] - 2016-03-10
### Changed
- fix mistake when changing the signature of HlsjsWrapper

## [2.0.0] - 2016-03-10
### Changed
- adaptation to the new p2p interface (P2P-164)

## [1.0.14] - 2016-03-04
### Changed
- fix streamroot-p2p import

## [1.0.13] - 2016-03-04 [BROKEN]
### Changed
- Use streamroot-p2p instead of streamroot-p2p-dist

## [1.0.12] - 2016-03-04
### Changed
- Use streamroot-p2p-dist (tarball) instead of streamroot-p2p
- Upgrade streamroot-p2p-dist to 2.4.18

## [1.0.11] - 2016-02-03
### Changed
- Upgrade streamroot-p2p to 2.4.14

## [1.0.10] - 2016-02-02
### Changed
- Upgrade streamroot-p2p to 2.4.13

## [1.0.9] - 2016-01-27
### Changed
- Upgrade streamroot-p2p to 2.4.12

## [1.0.8] - 2016-01-26
### Changed
- Upgrade streamroot-p2p to 2.4.11

## [1.0.7] - 2016-01-12
### Changed
- Implemented hls.js compatibility with version 0.4.3
- Upgrade streamroot-p2p to 2.4.10

## [1.0.6] - 2015-12-15
### Changed
- Use of streamroot-p2p instead of streamroot-p2p-dist
- update streamroot-p2p to version 2.4.5

## [1.0.5] - 2015-12-14
### Changed
- update streamroot-p2p to version 2.4.4

## [1.0.4] - 2015-12-10
### Changed
- update streamroot-p2p to version 2.4.3

## [1.0.3] - 2015-11-26
### Changed
- update streamroot-p2p to version 2.3.6

## [1.0.2] - 2015-11-19
### Changed
- update streamroot-p2p to version 2.3.5

## [1.0.1] - 2015-11-10
### Changed
- Use new p2pConfig object directly for this bundle. Old one has been deprecated (P2P-71)

## [1.0.0] - 2015-11-05
### Changed
- Add release workflow
