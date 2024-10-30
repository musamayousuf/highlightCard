import React from "react";

function QuestionIcon({ height = "", width = "", color = "currentColor" }) {
  return (
    <svg
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="m12 24c-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12 0 6.6274-5.3726 12-12 12zm0-1.2c5.9647 0 10.8-4.8353 10.8-10.8 0-5.96468-4.8353-10.8-10.8-10.8-5.96468 0-10.8 4.83532-10.8 10.8 0 5.9647 4.83532 10.8 10.8 10.8z"></path>
      <path d="m11.3777 14.8612c-.0001-.0035-.0001-.007-.0001-.0105.0001-.4138.0188-.7774.056-1.0907.0426-.32.1493-.64.32-.96.16-.304.3573-.5547.592-.752.2347-.2027.48-.392.736-.568.256-.1813.4987-.3947.728-.64.208-.24.3467-.4827.416-.728.0693-.24535.104-.50401.104-.77601s-.0347-.51467-.104-.728c-.064-.21334-.1653-.39734-.304-.552-.2133-.26134-.4747-.44-.784-.536s-.632-.144-.968-.144c-.3307 0-.64.048-.928.144-.2827.09066-.5174.232-.704.424-.1814.17066-.3147.376-.4.616-.08.24-.12.49333-.12.76 0 0-.10074 0-.70874 0-.36514 0-.50268 0-.50268 0v-.07577c.02787-.39483.11701-.78025.2674-1.15623.16534-.40534.40534-.744.72-1.016.31472-.288.68002-.496 1.09602-.624.4213-.13334.8453-.2 1.272-.2.5227 0 1.0187.08 1.488.24.4693.15466.864.416 1.184.784.256.272.4426.584.56.936.1226.34666.184.71733.184 1.112 0 .44266-.0827.85871-.248 1.24801s-.3973.736-.696 1.04c-.1813.1973-.3867.3813-.616.552-.2293.1653-.4507.3387-.664.52-.208.176-.368.368-.48.576-.1387.256-.216.4987-.232.728-.0107.2293-.016.52-.016.872 0 0 0 .4427-.6248.4427-.5847 0-.6208-.3877-.6231-.4375zm.6279 3.1388c-.3424 0-.62-.2776-.62-.62v-.328c0-.3424.2776-.62.62-.62s.62.2776.62.62v.328c0 .3424-.2776.62-.62.62z"></path>
    </svg>
  );
}

export default QuestionIcon;
