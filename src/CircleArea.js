import React from 'react';
import circlesData from './circles.json';

const circles = circlesData.data

const CircleArea = ({ row }) => (
  <div className="circle-area">
    <div>
      {
        (row === undefined) ? (
          'Show all of the circles in here lined up in their rows and columns...'
        ) : (
          'Show only the circles from row 5 in here, arranged in a circle themselves. ' +
          'Position the others outside the edge of the screen.'
        )
      }
    </div>
    <div>
      {
        'Here\'s an example circle: ' + JSON.stringify(circles[0])
      }
    </div>
  </div>
);

export default CircleArea;
