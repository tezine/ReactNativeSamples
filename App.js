//region imports
import React from 'react';
import VLogin from './views/VLogin'
import VUsers from "./components/VUsers";
import {StackNavigator} from "react-navigation";
import HomeComponents from "./components/VHomeComponents";
import VScrollView from "./components/VScrollView";
import VNetworking from "./components/VNetworking";
import VImages from "./components/VImages";
import VTextInput from "./components/VTextInput";
import VButton from "./components/VButton";
import VPicker from "./components/VPicker";
import VSlider from "./components/VSlider";
import VSwitch from "./components/VSwitch";
import {VSectionList} from "./components/VSectionList";
import VActivityIndicator from "./components/VActivityIndicator";
import VAlert from "./components/VAlert";
import VAnimated from "./components/VAnimated";
import VCameraRoll from "./components/VCameraRoll";
import VClipboard from "./components/VClipboard";
import VDimensions from "./components/VDimensions";
import VKeyboardAwareScrollView from "./components/VKeyboardAwareScrollView";
import VLinking from "./components/VLinking";
import VModal from "./components/VModal";
import VPixelRatio from "./components/VPixelRatio";
import VRefreshControl from "./components/VRefreshControl";
import VStatusBar from "./components/VStatusBar";
import VWebView from "./components/VWebView";
//endregion


const MyApp = StackNavigator({
    Login: { screen: VLogin },
    VUsers: { screen: VUsers },
    ScrollView: {screen:VScrollView},
    Networking:{screen:VNetworking},
    Images:{screen:VImages},
    Button:{screen:VButton},
    Picker:{screen:VPicker},
    Slider:{screen:VSlider},
    Switch:{screen:VSwitch},
    SectionList:{screen:VSectionList},
    Alert:{screen:VAlert},
    ActivityIndicator:{screen:VActivityIndicator},
    TextInput:{screen:VTextInput},
    Animated:{screen:VAnimated},
    CameraRoll:{screen:VCameraRoll},
    Clipboard:{screen:VClipboard},
    Dimensions:{screen:VDimensions},
    KeyboardAwareScrollView:{screen:VKeyboardAwareScrollView},
    Linking:{screen:VLinking},
    Modal:{screen:VModal},
    PixelRatio:{screen:VPixelRatio},
    RefreshControl:{screen:VRefreshControl},
    StatusBar:{screen:VStatusBar},
    WebView:{screen:VWebView},
    HomeComponents:{screen:HomeComponents},},
    {initialRouteName: 'HomeComponents',}
);

export default class App extends React.Component {

    render() {
        return <MyApp/>
    }
}
