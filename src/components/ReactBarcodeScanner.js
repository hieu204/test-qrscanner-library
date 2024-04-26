import React from 'react'
import { BarcodeScanner, useTorch } from 'react-barcode-scanner'

export default () => {
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch()

  return (
    <div style={{ width: '100%', height: '360px' }}>
      <BarcodeScanner />
      {isSupportTorch
        ? <button onClick={onTorchSwitch}>Swtich Torch</button>
        : null}
    </div>
  )
}
