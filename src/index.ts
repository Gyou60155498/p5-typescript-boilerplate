import p5 from 'p5'
import RotatingOrb from '~/shapes/RotatingOrb'
import { ShapesInterface } from '~/interfaces'
import { CANVAS_ID, FRAME_RATE, COLOR_BACKGROUND } from '~/constants'
import '~/style/global'

const captureConfig: CCaptureOptions = {
  format: 'webm',
  quality: 100,
  framerate: FRAME_RATE,
  verbose: true,
}

const sketch = (p5: p5) => {
  const capturer = new CCapture(captureConfig)
  let canvas: HTMLElement | null
  let orb: ShapesInterface
  let exportAnimation = false

  p5.preload = () => {}

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
    canvas = document.getElementById(CANVAS_ID)
    orb = new RotatingOrb(p5)
  }

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

  p5.draw = () => {
    p5.background(COLOR_BACKGROUND)
    orb.renderShapes()

    if (exportAnimation && canvas) {
      if (p5.frameCount === 1) {
        capturer.start()
      }

      capturer.capture(canvas)

      if (orb.isAnimationComplete) {
        p5.noLoop()
        capturer.stop()
        capturer.save()
      }
    }
  }
}

new p5(sketch)
