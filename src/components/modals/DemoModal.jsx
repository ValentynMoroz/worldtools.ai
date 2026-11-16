const DemoModal = ({ onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="w-full max-w-[420px] rounded-xl border border-modalBorder bg-cardsTransparent p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">ⓘ</span>
          <h3 className="text-xl font-semibold">Demo Version</h3>
        </div>

        <p className="text-pricingText text-sm leading-relaxed">
          You are exploring the demo version of worldtools.ai. Access to the
          interface is available without registration, but some features may be
          unavailable or may not work correctly due to demo mode limitations.
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={onConfirm}
            className="w-full rounded-xl bg-white py-3 text-sm font-medium text-black hover:bg-[#CECECE] transition-all"
          >
            Continue to Demo
          </button>

          <button
            onClick={onClose}
            className="w-full rounded-xl border border-modalBorder py-3 text-sm hover:bg-modalBorder transition-all"
          >
            Cancel
          </button>
        </div>

        <p className="text-xs text-pricingText text-center mt-4">
          No registration required
        </p>
      </div>
    </div>
  );
};

export default DemoModal;
