//inference of types

const spaceshipx = {
  name: 'Fenix',
  passengers: 0,
  speed: 0,
  hyperdrive: true
}


// In this first cenario, TypeScript will infer that the spaceshipx parameter is of type Any
function acceleratex( spaceshipx: { name?: string; passengers?: number; speed: any; hyperdrive?: boolean; }, speed: number) {
  spaceshipx.speed = speed
}

acceleratex(spaceshipx, 10)

//But if you pass the cursor over the spaceshipx parameter and select fast correction, you can make the auto inference to be more precise

function desacceleratex( spaceshipx: { name?: string; passengers?: number; speed: any; hyperdrive?: boolean }, speed: number)
 {
  spaceshipx.speed = speed
  
}

desacceleratex(spaceshipx, 10)