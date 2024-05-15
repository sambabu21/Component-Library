import PreviewCode from "../../PreviewCode/Index";
import ButtonAndToast from "./ButtonAndToast";

export default function ToastSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-3xl flex flex-col items-start p-20 gap-10">
        <h1 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight selection:">
          Toasts
        </h1>
        <h2 className="text-[#B4B4B4] -mt-5">
          Toasts display brief, temporary notifications. They're meant to be
          noticed without disrupting a user's experience or requiring an action
          to be taken.
        </h2>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Default Toast
        </h3>
        <PreviewCode
          component={
            <ButtonAndToast
              title="Success"
              description="Successfully updated your profile"
            >
              Show Toast
            </ButtonAndToast>
          }
          code={`
    <div>
        <Toast title="Success">Successfully updated your profile</Toast>
    </div>
         `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Types of toasts
        </h3>
        <PreviewCode
          component={
            <div className="flex flex-wrap gap-20 px-20 justify-center items-center">
              <ButtonAndToast
                title="Update success"
                description="Successfully updated your profile"
                variant="success"
              >
                Show success toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Something went wrong"
                description="Please re-save your work again"
                variant="error"
              >
                Show error toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Warning"
                description="A network error was detected"
                variant="warning"
              >
                Show warning toast
              </ButtonAndToast>
              <ButtonAndToast
                title="New update available"
                description="Please read updated information"
                variant="info"
              >
                Show info toast
              </ButtonAndToast>
            </div>
          }
          code={`
    <div>
        <Toast title="Update success" variant="success">Successfully updated your profile</Toast>
        <Toast title="Something went wrong" variant="error">Please re-save your work again</Toast>
        <Toast title="Warning" variant="warning">A network error was detected</Toast>
        <Toast title="New update available" variant="info">Successfully updated your profile</Toast>
    </div>
         `}
        />
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Toast positioning
        </h3>
        <PreviewCode
          component={
            <div className="flex flex-wrap gap-20 px-20 justify-center items-center">
              <ButtonAndToast
                title="Bottom toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="bottom"
              >
                Bottom toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Bottom-left toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="bottom-left"
              >
                Bottom-left toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Top-left toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="top-left"
              >
                Top-left toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Top toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="top"
              >
                Top toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Top-right toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="top-right"
              >
                Top-right toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Bottom-right toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="bottom-right"
              >
                Bottom-right toast
              </ButtonAndToast>
            </div>
          }
          code={`
          
    <div>
        <Toast title="Bottom toast" variant="success" position="bottom">Lorem ipsum dolor sit amet</Toast>
        <Toast title="Bottom-left toast" variant="success" position="bottom-left">Lorem ipsum dolor sit amet</Toast>
        <Toast title="Top-left toast" variant="success" position="top-left">Lorem ipsum dolor sit amet</Toast>
        <Toast title="Top toast" variant="success" position="top">Lorem ipsum dolor sit amet</Toast>
        <Toast title="Top-right toast" variant="success" position="top-right">Lorem ipsum dolor sit amet</Toast>
        <Toast title="Bottom-right toast" variant="success" position="bottom-right">Lorem ipsum dolor sit amet</Toast>
    </div>
         `}
        />
      </div>
    </div>
  );
}
