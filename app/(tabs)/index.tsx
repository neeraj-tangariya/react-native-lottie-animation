import LottieView from "lottie-react-native";
import { Fragment, useRef, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [playPause, setPlayPause] = useState<string>("play");
  const animationRef = useRef<LottieView>(null);

  const runAnimation = (mode: string) => {
    if (mode === "play") {
      animationRef?.current?.play();
    }

    if (mode === "pause") {
      animationRef?.current?.pause();
    }
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.animationBox}>
          <LottieView
            ref={animationRef}
            source={require("../../assets/animation/animation_1.json")}
            autoPlay={false}
            loop={false}
            style={{
              width: Dimensions.get("window").width - 100,
              height: Dimensions.get("window").height - 20,
            }}
          />
        </View>
        <View style={styles.btnBox}>
          <Button onPress={() => runAnimation("play")} title={"Start"} />
          <Button onPress={() => runAnimation("pause")} title={"Pause"} />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animationBox: {
    flex: 0.7,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnBox: {
    flex: 0.3,
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn: {
    width: "50%",
  },
});
