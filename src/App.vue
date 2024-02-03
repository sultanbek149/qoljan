<script setup>

</script>

<template>
  <div class="min-h-[624px] h-full">
    <div class="max-w-[380px] mx-auto pt-2 pb-5">
      <div class="banner relative rounded-[10px] overflow-hidden">
        <div class="pb-[78%]"></div>
        <div
          class="banner__img absolute inset-0 bg-cover  bg-[url('https://food.unl.edu/newsletters/images/food-groups.png')]">
        </div>
        <div class="banner__content absolute inset-0 overflow-hidden">
          <div class="photo-gradient h-full flex justify-center p-4">
            <div class="banner_body w-full">
              <div class="logo flex gap-2 mt-6 mb-[1.3rem] items-start">
                <img src="./assets/logo.jpg" class="full w-10 rounded-full" alt="logo">
                <p class="text-[1.6rem] font-bold text-white">qoljan</p>
              </div>

              <div class="title text-white text-[2rem]  font-[500] leading-none">
                Привезем фермерские продукты и товары до вашей двери
              </div>
            </div>
          </div>
        </div>
      </div>


      <form action="#" class="form max-w-[360px] mx-auto">
        <div class="form-row">
          <div class="input-data">
            <input type="text" required>
            <div class="underline"></div>
            <label for="">Имя</label>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <div class="underline"></div>
            <label for="">Опишите заказ</label>
            <br />
          </div>
        </div>
        <div class="form-row">
          <div class="input-data">
            <input type="text" required>
            <div class="underline"></div>
            <label for="">Выберите район и поселок</label>
          </div>
          <div class="input-data">
            <input type="text" required>
            <div class="underline"></div>
            <label for="">Телефон</label>
          </div>
        </div>
        <div class="form-row submit-btn">
          <div class="input-data st">
            <div class="inner"></div>
            <input type="submit" value="Отправить">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>
.form .text {
  text-align: center;
  font-weight: 600;
  /* font-family: 'Poppins', sans-serif; */
  background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

input:focus-visible,
textarea:focus-visible {
  outline: none;
}

.form form .form-row {
  margin: 32px 0;
}

form .form-row .input-data {
  width: 100%;
  height: 40px;
  position: relative;
}

form .form-row .textarea {
  height: 40px;
  transition: height .3s ease;
}

.input-data input,
.textarea textarea {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

.input-data input:focus~label,
.input-data input:valid~label {
  transform: translateY(-20px);
  font-size: 14px;
  color: hsl(116, 70%, 53%);

}

.textarea textarea:focus~label,
.textarea textarea:valid~label {
  transform: translateY(-55px);
  color: hsl(116, 70%, 53%);
}

form .form-row .textarea:has(textarea:focus, textarea:valid) {
  height: 70px;
}

.textarea textarea {
  resize: none;
  padding-top: 10px;
}

.input-data label {
  position: absolute;
  pointer-events: none;
  bottom: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.textarea label {
  width: 100%;
  bottom: 10px;
  background: #fff;
}

.input-data .underline {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}

.input-data .underline:before {
  position: absolute;
  content: "";
  height: 2px;
  width: 100%;
  background: hsl(116, 70%, 53%);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.input-data input:focus~.underline:before,
.input-data input:valid~.underline:before,
.textarea textarea:focus~.underline:before,
.textarea textarea:valid~.underline:before {
  transform: scale(1);
}

.submit-btn .input-data {
  overflow: hidden;
  height: 55px !important;
}

.submit-btn .input-data .inner {
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  transition: all 0.4s;
}

.input-data.st {
  overflow: hidden;
  box-shadow: 0 4px 15px 0 hsla(112, 100%, 57%, 0.48);
  background: hsl(113, 100%, 57%);
  height: 200px;
  border-radius: 10px;
  cursor: pointer;
}

.submit-btn .input-data:hover .inner {
  left: 0;
}

.submit-btn .input-data input {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  font-weight: 600;

}

.form .text {
  font-size: 30px;
}

.form form {
  padding: 10px 0 0 0;
}

.form form .form-row {
  display: block;
}

form .form-row .input-data:not(.st) {
  margin: 35px 0 !important;
}

.submit-btn .input-data {
  margin: 0 !important;
  font-size: 2rem;
}
</style>

