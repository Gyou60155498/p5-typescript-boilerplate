import p5 from 'p5'
import { Orb } from '~/interfaces'
import Shapes from '~/shapes/AbstractShapes'

export default class RotatingOrb extends Shapes {
  protected shapes: Orb[] = []
  private orbAngle = 0

  constructor(p5: p5) {
    super(p5)
    this.generateShape()
  }

  protected generateShape() {
    this.shapes.push({
      radius: 50,
    })
  }

  protected renderShape = ({
    radius,
  }: Orb) => {
    this.p5.rotateY(this.orbAngle)
    this.orbAngle += 0.01
    this.p5.sphere(radius)
  }

  protected setAnimationCompleteStatus(shapes: Orb[]) {
    if (this.p5.frameCount === 60) {
      this.isAnimationComplete = true
    }
  }

  protected updateShape(shapes: Orb[]) {}

  public renderShapes() {
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i]
      this.renderShape(shape)
    }
    this.setAnimationCompleteStatus(this.shapes)
  }
}
