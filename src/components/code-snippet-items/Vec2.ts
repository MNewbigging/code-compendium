import { CodeSnippetItemProps } from '../compendium/code-snippet-screen/CodeSnippetItem';

const vec2code = `class Vec2 {
  constructor(public x: number = 0, public y: number = 0) {}

  public static Add(v1: Vec2, v2: Vec2) {
    return new Vec2(v1.x + v2.x, v1.y + v2.y);
  }

  public static Subtract(left: Vec2, right: Vec2): Vec2 {
    return new Vec2(left.x - right.x, left.y - right.y);
  }

  public static Length(vec: Vec2): number {
    return Math.sqrt(Vec2.LengthSq(vec));
  }

  public static LengthSq(vec: Vec2): number {
    return vec.x * vec.x + vec.y * vec.y;
  }

  public static Normalize(vec: Vec2): Vec2 {
    let length: number = this.Length(vec);
    return new Vec2(vec.x / length, vec.y / length);
  }

  public static Dot(v1: Vec2, v2: Vec2): number {
    return v1.x * v2.x + v1.y * v2.y;
  }

  public static Reflect(v1: Vec2, v2: Vec2): Vec2 {
    // v1 - 2 * Dot(v1, v2) * v2;
    let scalar: number = 2 * this.Dot(v1, v2);
    let scaledVec2: Vec2 = new Vec2(v2.x * scalar, v2.y * scalar);
    return new Vec2(v1.x - scaledVec2.x, v1.y - scaledVec2.y);
  }

  public static Distance(v1: Vec2, v2: Vec2): number {
    let distanceVector: Vec2 = Vec2.Subtract(v2, v1);
    return Vec2.Length(distanceVector);
  }
}

class Utils {
  public static getTargetDirectionNormal(target: Vec2, position: Vec2): Vec2 {
    let positionToTarget: Vec2 = Vec2.Subtract(target, position);
    return Vec2.Normalize(positionToTarget);
  }

  public static CirclesIntersect(c1pos: Vec2, c1r: number, c2pos: Vec2, c2r: number): boolean {
    let distance: Vec2 = Vec2.Subtract(c1pos, c2pos);
    let radii: number = c1r + c2r;

    return Vec2.LengthSq(distance) < radii * radii;
  }

  public static ReboundOffset(v1: Vec2, v2: Vec2, step: number): Vec2 {
    let colNorm: Vec2 = Utils.getTargetDirectionNormal(v1, v2);
    colNorm.x *= step;
    colNorm.y *= step;
    return colNorm;
  }
  // v1, v2 are for line end vecs
  // center is center vec of circle
  public static CircleToLineIntersect(
    v1: Vec2,
    v2: Vec2,
    center: Vec2,
    radius: number
  ): boolean {
    // Find closest vec on line from center given
    let closestVec2: Vec2 = new Vec2();
    // Get the line from two vecs given, normalize
    let line: Vec2 = Vec2.Subtract(v2, v1);
    let lineNorm: Vec2 = Vec2.Normalize(line);
    // Get distance form player to v1
    let v1Distance: Vec2 = Vec2.Subtract(center, v1);
    // Use dot product to check if v1 is closest vec
    let projection: number = Vec2.Dot(v1Distance, lineNorm);

    if (projection < 0) {
      closestVec2 = v1;
    } else if (projection > Vec2.Length(line)) {
      closestVec2 = v2;
    } else {
      // Closest vec is more central on the line
      let projectionVelocity: Vec2 = new Vec2(lineNorm.x * projection, lineNorm.y * projection);
      closestVec2 = Vec2.Add(projectionVelocity, v1);
    }

    let closestDifference: Vec2 = Vec2.Subtract(center, closestVec2);
    let closestLength = Vec2.Length(closestDifference);
    if (closestLength <= radius) {
      return true;
    }

    return false;
  }

  public static isCircleInsideRectArea(
    rectPos: Vec2,
    rectWidth: number,
    rectHeight: number,
    circlePos: Vec2,
    circleRadius: number
  ): boolean {
    // Get absolute distance between rect and circle
    let dx = Math.abs(circlePos.x - (rectPos.x + rectWidth * 0.5));
    let dy = Math.abs(circlePos.y - (rectPos.y + rectHeight * 0.5));

    if (dx > circleRadius + rectWidth * 0.5) {
      return false;
    }
    if (dy > circleRadius + rectHeight * 0.5) {
      return false;
    }

    if (dx <= rectWidth) {
      return true;
    }
    if (dy <= rectHeight) {
      return true;
    }

    dx -= rectWidth;
    dy -= rectHeight;
    return dx * dx + dy * dy <= circleRadius * circleRadius;
  }

  public static getRandomNumber(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  public static getClosestVec2OnRectToCircle(
    rectPos: Vec2,
    rectWidth: number,
    rectHeight: number,
    circlePos: Vec2
  ): Vec2 {
    let closestXvec: number;
    let rectLeftPos: number = rectPos.x;
    let rectRightPos: number = rectPos.x + rectWidth;
    // check if already within x bounds of rect
    if (circlePos.x > rectLeftPos && circlePos.x < rectRightPos) {
      closestXvec = circlePos.x;
    } else {
      // If not already within bounds, find closest x value
      let distanceLeft: number = Math.abs(rectLeftPos - circlePos.x);
      let distanceRight: number = Math.abs(rectRightPos - circlePos.x);
      closestXvec =
        Math.min(distanceLeft, distanceRight) === distanceLeft ? rectLeftPos : rectRightPos;
    }

    let closestYvec: number;
    let rectTopPos: number = rectPos.y;
    let rectBotPos: number = rectPos.y + rectHeight;
    if (circlePos.y > rectTopPos && circlePos.y < rectBotPos) {
      closestYvec = circlePos.y;
    } else {
      let distanceTop: number = Math.abs(rectTopPos - circlePos.y);
      let distanceBot: number = Math.abs(rectBotPos - circlePos.y);
      closestYvec = Math.min(distanceTop, distanceBot) === distanceTop ? rectTopPos : rectBotPos;
    }

    return new Vec2(closestXvec, closestYvec);
  }

  public static getRadiansFromDegrees(degree: number): number {
    return (degree * Math.PI) / 180;
  }
}`;

export const vec2Props: CodeSnippetItemProps = {
  title: 'Vector 2 methods',
  description: 'A 2d vector implementation with accompanying utlity methods',
  code: vec2code,
};
