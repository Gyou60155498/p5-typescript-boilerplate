import p5 from 'p5'
import { OrbInterface } from '~/interfaces'
import Shapes from '~/shapes/AbstractShapes'

export default class RotatingOrb extends Shapes {
  public shapes: OrbInterface[] = []
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
  }: OrbInterface) => {
    this.p5.rotateY(this.orbAngle)
    this.orbAngle += 0.01
    this.p5.sphere(radius)
  }

  protected setAnimationCompleteStatus(shapes: OrbInterface[]) {
    if (this.p5.frameCount === 60) {
      this.isAnimationComplete = true
    }
  }

  protected updateShape(shapes: OrbInterface[]) {}

  public renderShapes() {
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i]
      this.renderShape(shape)
    }
    this.setAnimationCompleteStatus(this.shapes)
  }
}
