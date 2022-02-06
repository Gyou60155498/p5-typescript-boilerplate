interface CCaptureOptions {
  // target framerate for the capture
  framerate?: number
  // supersampling of frames to create a motion-blurred frame (0 or 1 make no effect)
  motionBlurFrames?: number
  format: 'webm' | 'gif' | 'png' | 'jpg' | 'ffmpegserver'
  // quality for webm/jpg
  quality?: number
  // name of the files to be exported. if no name is provided, a GUID will be generated
  name?: string
  // dumps info on the console
  verbose?: boolean
  // automatically stops and downloads when reaching that time (seconds)
  timeLimit?: number
  // it will automatically download the captured data every n seconds (only available for webm/png/jpg)
  autoSaveTime?: number
  // skip to that mark (seconds)
  startTime?: number
  // path to the gif worker script
  workersPath?: string
}

declare class CCapture {
  constructor(settings: CCaptureOptions)
  capture(canvas: HTMLElement): void
  start(): void
  stop(): void
  save(): void
}
