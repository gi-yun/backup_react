import React from 'react';
import './CheckoutComponent.css';
import checkout_labe1 from "../image/store_image/checkout_label01.png"; // 적절한 경로로 수정하세요
import checkout_labe2 from "../image/store_image/checkout_label02.png"; // 적절한 경로로 수정하세요
import checkout_labe3 from "../image/store_image/checkout_label03.png"; // 적절한 경로로 수정하세요
import checkout_labe4 from "../image/store_image/checkout_label04.png"; // 적절한 경로로 수정하세요



const CheckoutComponent = () => {
  return (
    <div className="checkOut-container flex-c flex-d-column">
      <div className="checkOut-title-box flex-c">
        <div className="title-box-text">
          <img src="./images/store_image/PopconB.png" alt="#"/>
          <h1>주문결제</h1>
        </div>
      </div>

      <div className="checkOut-contents flex-d-column">
        <div className="checkOut-contents-box flex-c flex-d-column">
          <div className="co-contents-title">
            <img src={checkout_labe1} alt=""/>
            <h2>구매자 정보</h2>
          </div>
          <div className="checkOut-user-info checkOut-grid">
            <p>이름</p>
            <p>최번영</p>
            <p>이메일</p>
            <p>qjsdudchl91@naver.com</p>
            <p>휴대폰번호</p>
            <div className="co-user-input-box">
              <input type="text" value="010-7288-5236"/>
              <button>수정</button>
            </div>
            <p></p>
            <p>인증번호를 못 받았다면 1577-7011 번호 차단 및 스팸 설정을 확인해 주세요.</p>
          </div>
        </div>
      </div>

      <div className="checkOut-contents flex-d-column">
        <div className="checkOut-contents-box flex-c flex-d-column">
          <div className="co-contents-title">
            <img src={checkout_labe2} alt=""/>
            <h2>받는 사람 정보</h2>
            <button>배송지 변경</button>
          </div>
          <div className="checkOut-add-info checkOut-grid">
            <p>이름</p>
            <p>최번영</p>
            <p>배송주소</p>
            <p>부산광역시 해운대구 APEC로 리더스마크 402호 스파로스 아카데미 10호실 입구 좌측 3번 테이블</p>
            <p>연락처</p>
            <p>010-8722-6236</p>
            <p>배송 요청사항</p>
            <p>문 앞에 두고 가세요</p>
          </div>
        </div>
      </div>

      <div className="checkOut-contents flex-d-column">
        <div className="checkOut-contents-box flex-c flex-d-column">
          <div className="co-contents-title">
            <img src={checkout_labe3} alt=""/>
            <h2>배송 정보</h2>
          </div>
          <div className="checkOut-delivery-info">
            <div className="co-delivery-item">
              <p>덴마크) 테이크얼라이브블렌드자몽 300mL</p>
              <p>1+1</p>
              <p>수량 /</p>
              <p>2</p>
              <p>무료배송/</p>
              <p>0원</p>
            </div>
            <div className="co-delivery-item">
              <p>덴마크) 테이크얼라이브블렌드자몽 300mL</p>
              <p>1+1</p>
              <p>수량 /</p>
              <p>2</p>
              <p>무료배송/</p>
              <p>0원</p>
            </div>
            <div className="co-delivery-item">
              <p>덴마크) 테이크얼라이브블렌드자몽 300mL</p>
              <p>1+1</p>
              <p>수량 /</p>
              <p>2</p>
              <p>무료배송/</p>
              <p>0원</p>
            </div>
          </div>
        </div>
      </div>

      <div className="checkOut-contents flex-d-column">
        <div className="checkOut-contents-box flex-c flex-d-column">
          <div className="co-contents-title">
            <img src={checkout_labe4} alt=""/>
            <h2>결제정보</h2>
          </div>
          <div className="checkOut-pay-info checkOut-grid">
            <p>총 상품 가격</p>
            <p>8,750,000원</p>
            <p>포인트 할인</p>
            <div className="co-point-box">
              <p>1,750,000</p>
              <button className="thema-btn-01">사용</button>
            </div>
            <p>배송비</p>
            <p>3000원</p>
            <p>팝콘 캐시</p>
            <p>팝콘 캐시</p>
            <p>결제 방법</p>
            <div className="checkOut-method">
              <div>
                <input type="checkbox" id="kakaoPay"/>
                <label htmlFor="kakaoPay">카카오페이</label>
              </div>
              <div>
                <input type="checkbox" id="naverPay"/>
                <label htmlFor="naverPay">네이버페이</label>
              </div>
              <div>
                <input type="checkbox" id="tossPay"/>
                <label htmlFor="tossPay">토스페이</label>
              </div>
              <div>
                <input type="checkbox" id="accountTransfer"/>
                <label htmlFor="accountTransfer">계좌이체</label>
              </div>
              <div>
                <input type="checkbox" id="creditCard"/>
                <label htmlFor="creditCard">신용/체크카드</label>
              </div>
              <div>
                <input type="checkbox" id="mobilePay"/>
                <label htmlFor="mobilePay">휴대폰결제</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkOut-btn-box flex-sb">
        <button className="thema-btn-01">주문하기</button>
        <button className="thema-btn-02">뒤로가기</button>
      </div>
    </div>
  );
};

export default CheckoutComponent;
