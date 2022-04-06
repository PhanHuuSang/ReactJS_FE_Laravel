import React, { useState } from 'react'

const FeaedBack = () => {

    const [showFeedBack, setShowFeedBack] = useState(false)
    const [closeFeedBack, setCloseFeedBack]  = useState(false)
  return (
      <>
      {
          showFeedBack ? 
                <div class="feedBackIcon">
                    <div onClick={() => setShowFeedBack(false)} class="closeFeedBack">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div class="contentFeedBack">
                        <p>SBCode xin chào! Chúng tôi rất mong nhận được phản hồi của bạn về website.</p>
                    </div>
                    <div class="iconFeedBack">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="iconAngry">
                                    <i class="fa-solid fa-face-angry"></i>
                                    <p>Ghét</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="iconMeh">
                                    <i class="fa-solid fa-face-meh"></i>
                                    <p>Tạm ổn</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="iconGrin">
                                    <i class="fa-solid fa-face-grin"></i>
                                    <p>Thích</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="iconLove">
                                    <i class="fa-solid fa-face-grin-hearts"></i>
                                    <p>Rất thích</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            :   <div div onClick={() => setShowFeedBack(!showFeedBack)} class="feedBack">
                    <i class="fa-solid fa-comment-dots"></i>
                    <p>Phản hồi</p>
                </div>
      }
    </>
  )
}

export default FeaedBack