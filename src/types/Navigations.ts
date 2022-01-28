import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

export type Navigation = NavigationScreenProp<NavigationState, NavigationParams> 

export type NavigationProps = {
    navigation: Navigation;
    route?: any;
    locationPermission?: any;
}