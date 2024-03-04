import Lottie from "lottie-react";
import loading from "../../assets/animations/loading.json";
import { StyledLoading } from "./styles";

const Loading = () => (
  <StyledLoading>
    <Lottie
      animationData={loading}
      loop={true}
      style={{
        width: "125px",
      }}
    />
  </StyledLoading>
);

export default Loading;
