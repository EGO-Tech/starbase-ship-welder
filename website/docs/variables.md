---
sidebar_position: 10
---

# Global Variables

The following in alphabetical order are global variables named on the ship other than the default name.
Not all are used by the ship.

| Variable | Description | Default |Modules | Readonly? | Used? | Mapped To | Mapped From |
|---|---|---|---|---|---|---|---|
| `A` | Signal strength of back receiver for NavGrid | - | [Base (Back)](./constructing/back-section/) | Y | Y | - | - |
| `Aim` | Aim activation | 8 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Alarm` | Avoidance alarm activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `AlarmOn` | Avoidance alarm activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Ap` | Approach activation | 8 | [Base (Front)](./constructing/front-section/) | N | Y | - | `Approach` |
| `Approach` | Approach activation | 8 | [Base (Front)](./constructing/front-section/) | N | Y | `Ap` | - |
| `AT` | Target message of back receiver for NavGrid | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `AutoGen` | Tow beam autogen activation | 0 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | N | Y | `Auto Gen` | - |
| `AutoPilot` | Auto pilot system (NavCas) activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Auto Gen` | Tow beam autogen activation | 0 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | N | Y | - | `AutoGen` |
| `AD` | Avoidance system downwards flag | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `AU` | Avoidance system upwards flag | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `AV` | Avoidance system activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | `Avoidance` |
| `Avoidance` | Avoidance system activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | `AV` | - |
| `Avoids` | Avoidance count display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `AV_Res` | Avoidance trip value reset | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `BackLeft1`, `BackLeft2` | Thruster group names of back maneuver thrusters. Set in main flight computer. | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `BackRight1`, `BackRight2` | Thruster group names of back maneuver thrusters Set in main flight computer. | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `BackBotttomLeft` | Thruster group name of back maneuver thrusters Set in main flight computer. | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `BackBotttomRight` | Thruster group name of back maneuver thrusters Set in main flight computer. | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `BackTopLeft` | Thruster group name of back maneuver thrusters Set in main flight computer. | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `BackTopRight` | Thruster group name of back maneuver thrusters Set in main flight computer. | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `BackupRods` | Number of backup rods for backup rods fuel time | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Battery` | Current battery charge storage (maximum of 10,0000) | - | [Base (Back)](./constructing/back-section/) | Y | Y | - | - |
| `BCW` | Backup rods fuel time chip wait | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `BRS` | Backup rods switch value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `C1` to `C9` | Current central guide laser distances | 1000 | [Base (Front)](./constructing/front-section/) | Y | Y | - | - |
| `Canopy` | Cockpit canopy activation, hinges and buttons | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `CAS` | Avoidance and auto pilot activation flag | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Cruise` | Cruise activation | 10 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Collect` | Ore collectors activation | 0 | [Front Cockpit Collectors](./constructing/front-section/cockpit#front-cockpit-collectors-module) | N | Y | - | - |
| `DD` | Auto pilot system (NavCas) debug display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Distance` | Current distance value of range laser | - | [Base (Front)](./constructing/front-section/) | Y | Y | `MD`, `M` | - |
| `Door` | Door activation, hinges and buttons | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `E` | Signal strength of front receiver for NavGrid | - | [Base (Front)](./constructing/front-section/) | Y | Y | - | - |
| `ET` | Target message of front receiver for NavGrid | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `EX` | ISAN 3 in 1 back receiver X coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `EY` | ISAN 3 in 1 back receiver Y coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `EZ` | ISAN 3 in 1 back receiver Z coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `F1` to `F10` | Current fuel in individual fuel chambers. | - | [Base (Front)](./constructing/front-section/) | Y | Y | `Fuel Rod 1` to `Fuel Rod 10` | - |
| `F11` to `F16` | Current fuel in individual fuel chambers. | - | [Body Generators](./constructing/body-section/utility#generators-module) | Y | Y | `Fuel Rod 11` to `Fuel Rod 16` | - |
| `FCW` | Fuel time chip wait | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `ForwardThrust` | Current thrust of rear thrusters (maximum of 10,0000), set on all rear thruster groups | - | [Base (Back)](./constructing/back-section/) | Y | Y | - | - |
| `Front1` to `Front8` | Thruster group names of front thrusters. Set in main flight computer. | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FrontLeft1`, `FrontLeft2` | Thruster group names of front maneuver thrusters. Set in main flight computer. | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FrontRight1`, `FrontRight2` | Thruster group names of front maneuver thrusters Set in main flight computer. | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FrontBotttomLeft` | Thruster group name of front maneuver thrusters Set in main flight computer. | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FrontBotttomRight` | Thruster group name of front maneuver thrusters Set in main flight computer. | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FrontTopLeft` | Thruster group name of front maneuver thrusters Set in main flight computer. | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FrontTopRight` | Thruster group name of front maneuver thrusters Set in main flight computer. | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FUD` | FCU up down value, used by avoidance system | 0 | [Base (Front)](./constructing/front-section/) | N | Y | `FcuUpDown` | - |
| `Fuel` | Current total fuel in all fuel chambers. | - | [Base (Front)](./constructing/front-section/) | Y | Y | - | - |
| `FuelTime` | Fuel time display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Fuel Rod 1` to `Fuel Rod 10` | Current fuel in individual fuel chambers. | - | [Base (Front)](./constructing/front-section/) | Y | Y | - | `F1` to `F10` |
| `Fuel Rod 11` to `Fuel Rod 16` | Current fuel in individual fuel chambers. | - | [Body Generators](./constructing/body-section/utility#generators-module) | Y | Y | - | `F11` to `F16` |
| `FX` | ISAN 3 in 1 front receiver X coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FY` | ISAN 3 in 1 front receiver Y coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `FZ` | ISAN 3 in 1 front receiver Z coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `GD` | Guide lasers activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | `Guide` |
| `Generator` | Current generator rate of generators | - | [Base (Front)](./constructing/front-section/), [Body Generators](./constructing/body-section/utility#generators-module)  | Y | Y | - | - |
| `GenRate` | Generator rate limit of generators | - | [Base (Front)](./constructing/front-section/), [Body Generators](./constructing/body-section/utility#generators-module)  | N | Y | - | - |
| `Guide` | Guide lasers activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | `GD` | - |
| `GX` | ISAN 3 in 1 bottom receiver X coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `GY` | ISAN 3 in 1 bottom receiver Y coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `GZ` | ISAN 3 in 1 bottom receiver Z coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Hdg` | NavGrid heading value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `I` | Signal strength of bottom receiver for NavGrid | - | [Base (Back)](./constructing/back-section/) | Y | Y | - | - |
| `IdBlink` | Transponder light blink activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `ISAN_Res` | ISAN reset | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `IT` | Target message of bottom receiver for NavGrid | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `KE` | Signal strength of back receiver for ISAN 3 in 1 | - | [Base (Back)](./constructing/back-section/) | Y | Y | - | - |
| `KF` | Signal strength of front receiver for ISAN 3 in 1 | - | [Base (Front)](./constructing/front-section/) | Y | Y | - | - |
| `KG` | Signal strength of bottom receiver for ISAN 3 in 1 | - | [Base (Back)](./constructing/back-section/) | Y | Y | - | - |
| `KT` | Target message for ISAN 3 in 1 | - | [Base (Back)](./constructing/back-section/), [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `L1` to `L9` | Current left guide laser distances | 1000 | [Base (Front)](./constructing/front-section/) | Y | Y | - | - |
| `Lasers` | Mining lasers activation | 0 | [Front Cockpit Lasers](./constructing/front-section/side#front-side-lasers-module) | N | Y | - | - |
| `LAV` | Avoidance lifetime count | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Load_AP` | Auto pilot target load activation | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `LP1`, `LP2` | Mining lasers' pitch | 0 | [Front Cockpit Lasers](./constructing/front-section/side#front-side-lasers-module) | N | Y | - | - |
| `LR1`, `LR2` | Mining lasers' rotation | 0 | [Front Cockpit Lasers](./constructing/front-section/side#front-side-lasers-module) | N | Y | - | - |
| `M` | Current distance value of range laser | - | [Base (Front)](./constructing/front-section/) | Y | Y | - | `Distance` |
| `Mass` | Tow beam locked mass | 0 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | Y | Y | `Tow Mass` | - |
| `MaxPropellant` | Maximum propellant in the ship's network | - | [Base (Back)](./constructing/back-section/), [Body Propellant](./constructing/body-section/utility#propellant-modules), [Back Inner Propellant](./constructing/back-section/inner#back-inner-propellant-module) | Y | Y | - | - |
| `MBR` | Maximum number of backup rods | 20 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `MD` | Current distance value of range laser | - | [Base (Front)](./constructing/front-section/) | Y | Y | - | `Distance` |
| `MES` | Minimum generator rate switch value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `MinEPS` | Minimum generator rate if `Min Gen` is activated | 50 | [Base (Front)](./constructing/front-section/) | N | Y | `Min Generator Limit` | - |
| `Min_EPS` | Minimum generator rate activation and button | 0 | [Base (Front)](./constructing/front-section/) | N | Y | `Min Gen` | - |
| `Min Gen` | Minimum generator rate activation and button | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | `Min_EPS` |
| `Min Generator Limit` | Minimum generator rate if `Min Gen` is activated | 50 | [Base (Front)](./constructing/front-section/) | N | Y | - | `MinEPS` |
| `MM` | Tow beam maximum mass in kilotons | 10 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | N | Y | - | - |
| `MMK` | Tow beam maximum mass in kilograms | 10000000 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | N | Y | - | - |
| `MR` | Range laser activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | `Range` |
| `Nav` | Auto pilot system (NavCas) auto direction activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `NavC` | NavGrid display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `NavGrid` | NavGrid display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `NavP` | NavGrid display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nDist` | NavGrid distance value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nDn` | NavGrid waypoint down button | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nHdg` | NavGrid heading value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nName` | NavGrid new name | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nP07` to `nP20` | NavGrid waypoint saves | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nPit` | NavGrid pitch value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nSave` | NavGrid waypoint save button | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nSet` | NavGrid waypoint set button | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nStat` | NavGrid stat value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nStr` | NavGrid string value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `nUp` | NavGrid waypoint up button | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `NX` | NavGrid new X coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `NY` | NavGrid new Y coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `NZ` | NavGrid new Z coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Odometer` | Odometer display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Odo_L` | Odometer lifetime value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Odo_Res` | Odometer trip value reset | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Odo_T` | Odometer trip value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `PCW` | Propellant time chip wait | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Ping` | Transponder ping activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Pit` | NavGrid pitch value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Plasma` | Plasma thruster activation | 0 | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `PlasmaCharge` | Plasma thruster current charge level (Maximum of 1) | - | [Base (Back)](./constructing/back-section/) | Y | Y | `Plasma Charge Level` | - |
| `Plasma Charge Level` | Plasma thruster current charge level (Maximum of 1) | - | [Base (Back)](./constructing/back-section/) | Y | Y | - | `PlasmaCharge` |
| `Ponder` | Transponder activation | 1 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Port` | Port side door activation, hinges and buttons | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Port) | N | Y | - | - |
| `PortAngle` | Current angle of port side door | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Port) | Y | N | - | - |
| `PortEndAngle` | End angle of port side door | 115 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Port) | N | N | - | - |
| `PortStartAngle` | Start angle of port side door | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Port) | N | N | - | - |
| `Propellant` | Current propellant in the ship's network | - | [Base (Back)](./constructing/back-section/), [Body Propellant](./constructing/body-section/utility#propellant-modules), [Back Inner Propellant](./constructing/back-section/inner#back-inner-propellant-module) | Y | Y | - | - |
| `PropTime` | Propellant time display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `R1` to `R9` | Current right guide laser distances | 1000 | [Base (Front)](./constructing/front-section/) | Y | Y | - | - |
| `Range` | Range laser activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | `MR` | - |
| `Rear1` to `Rear18` | Thruster group names of rear thrusters. Set in main flight computer. | - | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `RD` | Guide laser lower row detection flag | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `RM` | Guide laser middle row detection flag | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Rol` | NavGrid roll value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `RU` | Guide laser upper row detection flag | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `S` | ISAN speed from NavGrid | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `SafeZone` | Safe zone display | - | [Base (Front)](./constructing/front-section/) | Y | Y | - | - |
| `Sense` | Sensitivity rate | 20 | [Base (Front)](./constructing/front-section/) | N | Y | `Sensitivity` | - |
| `Sense1` | Sensitivity rate for lever maximum value | 100 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Sense2` | Sensitivity rate for lever minimum value | -100 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Sensitivity` | Sensitivity rate | 20 | [Base (Front)](./constructing/front-section/) | N | Y | - | `Sense` |
| `Service` | Service door activation, hinges and buttons | 0 | [Base (Back)](./constructing/back-section/) | N | Y | - | - |
| `Shutdown` | Fuel chamber rate limit | 100 | [Base (Front)](./constructing/front-section/), [Body Generators](./constructing/body-section/utility#generators-module)  | N | Y | - | - |
| `Sloth` | Sloth activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Sp` | Current speed from speedometer | - | [Base (Front)](./constructing/front-section/) | Y | Y | `Speed` | - |
| `Speed` | Current speed from speedometer | - | [Base (Front)](./constructing/front-section/) | Y | Y | - | `Sp` |
| `SSS` | Sensitivity rate switch value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Starboard` | Starboard side door activation, hinges and buttons | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Starboard) | N | Y | - | - |
| `StarboardAngle` | Current angle of starboard side door | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Starboard) | Y | N | - | - |
| `StarboardEndAngle` | End angle of starboard side door | 115 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Starboard) | N | N | - | - |
| `StarboardStartAngle` | Start angle of starboard side door | 0 | [Body Side Door](./constructing/body-section/hull#side-door-modules) (Starboard) | N | N | - | - |
| `SY` | NavGrid sync value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Target` | Auto pilot target display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `TAV` | Avoidance trip count | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `tHdg` | NavGrid heading value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Timer` | Timer display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `totalFuelChip` | Total fuel chip wait | - | [Body Generators](./constructing/body-section/utility#generators-module) | N | Y | `Total Fuel` | - |
| `Tow` | Tow beam activation | 0 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | N | Y | - | - |
| `TowStatus` | Tow beam status | 0 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | Y | Y | `Tow Status` | - |
| `Tow Mass` | Tow beam locked mass | 0 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | Y | Y | - | `Mass` |
| `Tow Status` | Tow beam status | 0 | [Back Top/Bottom End Tow](./constructing/back-section/top_bottom_end#back-topbottom-end-tow-module) | Y | Y | - | `TowStatus` |
| `tPit` | NavGrid pitch value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `TRS` | Turtle rate switch value | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `TS` | Timer value in seconds | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Turtle` | Turtle activation | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `TurtleRate` | Sensitivity rate | 20 | [Base (Front)](./constructing/front-section/) | N | Y | `Sensitivity` | - |
| `T_Res` | Timer value reset | 0 | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `WithBackup` | Back rods fuel time display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `U` | NavGrid debug display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `UX` | NavGrid U X coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `UY` | NavGrid U Y coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `UZ` | NavGrid U Z coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `V` | NavGrid debug display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `VX` | NavGrid V X coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `VY` | NavGrid V Y coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `VZ` | NavGrid V Z coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `W0` to `W9` | Warning light activation | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `WA` | Warning light activation | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `WB` | Warning light activation | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `WX` | Auto pilot target X coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `WY` | Auto pilot target Y coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `WZ` | Auto pilot target Z coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `X` | NavGrid target X coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Y` | NavGrid target Y coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `Z` | NavGrid target Z coordinate | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
| `_` | ISAN display | - | [Base (Front)](./constructing/front-section/) | N | Y | - | - |
