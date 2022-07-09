---
sidebar_position: 10
---

# Global Variables

The following in alphabetical order are global variables named on the ship other than the default name.
Not all are used by the ship.

| Variable | Description | Default |Modules | Readonly? | Used? | Mapped To | Mapped From |
|---|---|---|---|---|---|---|---|
| `A` | Signal strength of back receiver for NavGrid | - | Base (Back) | Y | Y | - | - |
| `AT` | Target message of back receiver for NavGrid | - | Base (Back) | N | Y | - | - |
| `BackLeft1`, `BackLeft2` | Thruster group names of back maneuver thrusters. Set in main flight computer. | - | Base (Back) | N | Y | - | - |
| `BackRight1`, `BackRight2` | Thruster group names of back maneuver thrusters Set in main flight computer. | - | Base (Back) | N | Y | - | - |
| `BackBotttomLeft` | Thruster group name of back maneuver thrusters Set in main flight computer. | - | Base (Back) | N | Y | - | - |
| `BackBotttomRight` | Thruster group name of back maneuver thrusters Set in main flight computer. | - | Base (Back) | N | Y | - | - |
| `BackTopLeft` | Thruster group name of back maneuver thrusters Set in main flight computer. | - | Base (Back) | N | Y | - | - |
| `BackTopRight` | Thruster group name of back maneuver thrusters Set in main flight computer. | - | Base (Back) | N | Y | - | - |
| `Battery` | Current battery charge storage (maximum of 10,0000) | - | Base (Back) | Y | Y | - | - |
| `E` | Signal strength of front receiver for NavGrid | - | Base (Front) | Y | Y | - | - |
| `ET` | Target message of front receiver for NavGrid | - | Base (Front) | N | Y | - | - |
| `ForwardThrust` | Current thrust of rear thrusters (maximum of 10,0000), set on all rear thruster groups | - | Base (Back) | Y | Y | - | - |
| `I` | Signal strength of bottom receiver for NavGrid | - | Base (Back) | Y | Y | - | - |
| `IT` | Target message of bottom receiver for NavGrid | - | Base (Back) | N | Y | - | - |
| `KE` | Signal strength of back receiver for ISAN 3 in 1 | - | Base (Back) | Y | Y | - | - |
| `KF` | Signal strength of front receiver for ISAN 3 in 1 | - | Base (Front) | Y | Y | - | - |
| `KG` | Signal strength of bottom receiver for ISAN 3 in 1 | - | Base (Back) | Y | Y | - | - |
| `KT` | Target message for ISAN 3 in 1 | - | Base (Back), Base (Front) | N | Y | - | - |
| `MaxPropellant` | Maximum propellant in the ship's network | - | Base (Back), [Body Propellant](./constructing/body-section/utility#propellant-modules), [Back Inner Propellant](./constructing/back-section/inner#back-inner-propellant-module) | Y | Y | - | - |
| `Plasma` | Plasma thruster activation | 0 | Base (Back) | N | Y | - | - |
| `PlasmaCharge` | Plasma thruster current charge level (Maximum of 1) | - | Base (Back) | Y | Y | - | - |
| `Port` | Port side door activation, hinges and buttons | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Port) | N | Y | - | - |
| `PortAngle` | Current angle of port side door | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Port) | Y | N | - | - |
| `PortEndAngle` | End angle of port side door | 115 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Port) | N | N | - | - |
| `PortStartAngle` | Start angle of port side door | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Port) | N | N | - | - |
| `Propellant` | Current propellant in the ship's network | - | Base (Back), [Body Propellant](./constructing/body-section/utility#propellant-modules), [Back Inner Propellant](./constructing/back-section/inner#back-inner-propellant-module) | Y | Y | - | - |
| `Rear1` to `Rear18` | Thruster group names of rear thrusters Set in main flight computer. | - | Base (Back) | N | Y | - | - |
| `Service` | Service door activation, hinges and buttons | 0 | Base (Back) | N | Y | - | - |
| `Starboard` | Starboard side door activation, hinges and buttons | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Starboard) | N | Y | - | - |
| `StarboardAngle` | Current angle of starboard side door | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Starboard) | Y | N | - | - |
| `StarboardEndAngle` | End angle of starboard side door | 115 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Starboard) | N | N | - | - |
| `StarboardStartAngle` | Start angle of starboard side door | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Starboard) | N | N | - | - |
