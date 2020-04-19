import Moveable, { OnDrag, OnResize, OnScale, OnRotate } from 'react-moveable';
import React from 'react';

export type MoveableProps = {
  target: HTMLElement | SVGElement;
};

const _Moveable = ({ target }: MoveableProps) => {
  return (
    <Moveable
      target={target}
      container={null}
      origin={true}
      /* Resize event edges */
      edge={false}
      /* draggable */
      draggable={true}
      throttleDrag={0}
      onDragStart={({ target, clientX, clientY }) => {
        console.log('onDragStart', target);
      }}
      onDrag={({
        target,
        beforeDelta,
        beforeDist,
        left,
        top,
        right,
        bottom,
        delta,
        dist,
        transform,
        clientX,
        clientY,
      }: OnDrag) => {
        console.log('onDrag left, top', left, top);
        // target!.style.left = `${left}px`;
        // target!.style.top = `${top}px`;
        console.log('onDrag translate', dist);
        target!.style.transform = transform;
      }}
      onDragEnd={({ target, isDrag, clientX, clientY }) => {
        console.log('onDragEnd', target, isDrag);
      }}
      /* When resize or scale, keeps a ratio of the width, height. */
      keepRatio={true}
      /* scalable */
      /* Only one of resizable, scalable, warpable can be used. */
      scalable={true}
      throttleScale={0}
      onScaleStart={({ target, clientX, clientY }) => {
        console.log('onScaleStart', target);
      }}
      onScale={({ target, scale, dist, delta, transform, clientX, clientY }: OnScale) => {
        console.log('onScale scale', scale);
        target!.style.transform = transform;
      }}
      onScaleEnd={({ target, isDrag, clientX, clientY }) => {
        console.log('onScaleEnd', target, isDrag);
      }}
      /* rotatable */
      rotatable={true}
      throttleRotate={0}
      onRotateStart={({ target, clientX, clientY }) => {
        console.log('onRotateStart', target);
      }}
      onRotate={({ target, delta, dist, transform, clientX, clientY }: OnRotate) => {
        console.log('onRotate', dist);
        target!.style.transform = transform;
      }}
      onRotateEnd={({ target, isDrag, clientX, clientY }) => {
        console.log('onRotateEnd', target, isDrag);
      }}
      // Enabling pinchable lets you use events that
      // can be used in draggable, resizable, scalable, and rotateable.
      pinchable={true}
      onPinchStart={({ target, clientX, clientY, datas }) => {
        // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
        console.log('onPinchStart');
      }}
      onPinch={({ target, clientX, clientY, datas }) => {
        // pinch event occur before drag, rotate, scale, resize
        console.log('onPinch');
      }}
      onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
        // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
        console.log('onPinchEnd');
      }}
    />
  );
};

export default _Moveable;
