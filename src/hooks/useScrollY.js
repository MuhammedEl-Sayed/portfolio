import { useCallback, useEffect } from 'react'
import { useSpring, config } from '@react-spring/core'
import { useGesture } from 'react-use-gesture'
import clamp from 'lodash/clamp'
var cameraPositions = [];
cameraPositions = [0, -15, -30, -44]
export default function useScrollY(bounds, props) {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: config.slow }))
  //ok so xy is the position we should spring too
  //previous is previous xy
  //memo is previous newY.
  //What we want to do is iterate through the camera positions.
  //We can first try just clamping the final answer to bounds, which would also include the positions
  //that we want to use
  var index = 0;
  const fn = useCallback(
    ({ xy : [, cy], previous: [, py], movement: [, move], first:  roll, memo = y.get() }) => {
      const newY = clamp(memo - cy + py, ...bounds)
      if(roll){
        if(move > 0){


           index++;
        }
        else{
          index--;
        }
        if(index < 0){
          index = 3;
        }
        if(index > 3){
          index = 0
        }
      }
      



      set({ y: cameraPositions[index] })
      return newY
    },
    [bounds, y, set]
  )
  let pan = false;
  const fn2 = useCallback(
    ({ vxvy : [, cy], movement: [, move], first:  roll, memo = y.get() }) => {
      
      if(roll){
        pan = true;
      }

        if(cy > 0 && pan){


           index--;
           pan = false;
        }
        else if (cy < 0&& pan){
          index++ ;
          pan = false;

        }
        if(index < 0){
          index = 3;
        }
        if(index > 3){
          index = 0
        }
      
      



      set({ y: cameraPositions[index] })
      return cameraPositions[index]
    },
    [bounds, y, set]
  )

  const bind = useGesture({ onWheel: fn}, props)
  useEffect(() => props && props.domTarget && bind(), [props, bind])
  return [y, bind]
}
