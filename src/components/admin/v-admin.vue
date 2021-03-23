<template>
  <div class="v-admin">
    <section>
      <div class="contentBx">
        <div class="formBx block">
          <h2>Login</h2>
          <form action="">
            <div class="inputBx">
              <span>Username</span>
              <input type="text">
            </div>
            <div class="inputBx">
              <span>Password</span>
              <input type="password">
            </div>
            <div class="remember">
              <label for=""><input type="checkbox"> Remember me</label>
            </div>
            <div class="inputBx">
              <div class="submit">Sing in</div>
            </div>
            <div class="inputBx">
              <p>Don`t have an account? <a href="">Sing up</a></p>
            </div>
          </form>
          <h3>Login with social media</h3>
          <ul class="sci">
            <li><img src="../../assets/twitter.svg" alt=""></li>
            <li><img src="../../assets/instagram.svg" alt=""></li>
            <li><img src="../../assets/facebook.svg" alt=""></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.admin { 
  display: flex;
  justify-content: flex-end;
  padding: 50px 100px 100px;
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 30px;
    .contentBx {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 630px;
      z-index: 1;
      .formBx {
        width: 100%;
        padding: 40px;
        margin: 50px;
        h2 {
          color: #fff;
          font-weight: 600;
          font-size: 1.5em;
          text-transform: uppercase;
          margin-bottom: 20px;
          border-bottom: 4px solid #ff4584;
          display: inline-block;
          letter-spacing: 1px;
        }
        .inputBx {
          margin-bottom: 20px;
          span {
            font-size: 16px;
            margin-bottom: 5px;
            display: inline-block;
            color: #fff;
            font-weight: 300;
            font-size: 16px;
            letter-spacing: 1px;
          }
          input {
            width: 100%;
            padding: 10px 20px;
            outline: none;
            font-weight: 400;
            border: 1px solid #fff;
            font-size: 16px;
            letter-spacing: 1px;
            color: #fff;
            background: transparent;
            border-radius: 30px;          
          }
          p {
            color: #fff;
            a {
              color: #ff4584;
            }
          }
          .submit {
              width: 100%;
              padding: 10px 20px;
              font-weight: 600;
              border: 1px solid #fff;
              font-size: 16px;
              letter-spacing: 1px;
              background: #fff;
              color: #434978;
              border-radius: 30px; 
              outline: none;
              text-align: center;
              cursor: pointer;
              &:hover {
                color: #fff;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid #fff;
              }
            }
        }
        .remember {
          margin-bottom: 10px;
          color: #fff;
          font-weight: 400;
          font-size: 14px;
        }
        h3 {
          color: #fff;
          text-align: center;
          margin: 30px 0 10px;
          font-weight: 500;
        }
        .sci {
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            list-style: none;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 50%;
            margin: 0 7px;
            cursor: pointer; 
            &:hover {
              background: #ff4584;
            }
            img {
              transform: scale(0.5);
              filter: inherit(1);
              width: 100%;
            }
          }
        }
      }
    }
  }
}

input .submit{
  :hover {
    background: #f53677;
  }
}
@media (max-width: 990px) {
  .admin {
    justify-content: center;
    padding: 50px 10px 100px;
  }
}

</style>