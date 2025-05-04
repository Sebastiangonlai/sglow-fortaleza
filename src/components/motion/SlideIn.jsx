"use client"
import { MotionWrapper } from "./motion-wrapper"

export const SlideIn = (props) => (
  <MotionWrapper animation="slide" {...props} />
)