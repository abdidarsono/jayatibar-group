<template>
  <section>
    <div class="container">
      <div class="card">
        <div class="card-inner" style="--clr:#fff;">
          <div class="box">
            <div class="imgBox">
              <img src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trust & Co.">
            </div>
            <div class="icon">
              <a href="#" class="iconBox"> <span class="material-symbols-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </span></a>
            </div>
          </div>
        </div>
        <div class="content">
          <h3>SKA</h3>
          <p>Fill out the form and the algorithm will offer the right team of experts</p>
          <ul>
            <li style="--clr-tag:#DA4132;" class="branding">branding</li>
            <li style="--clr-tag:#FDF8F7;" class="packaging">packaging</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-inner" style="--clr:#fff;">
          <div class="box">
            <div class="imgBox">
              <img src="https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tonic">
            </div>
            <div class="icon">
              <a href="#" class="iconBox"> <span class="material-symbols-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </span></a>
            </div>
          </div>
        </div>
        <div class="content">
          <h3>AKAP Terminal</h3>
          <p>Fill out the form and the algorithm will offer the right team of experts</p>
          <ul>
            <li style="--clr-tag:#DA4132;" class="branding">branding</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-inner" style="--clr:#fff;">
          <div class="box">
            <div class="imgBox">
              <img src="https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shower Gel">
            </div>
            <div class="icon">
              <a href="#" class="iconBox"> <span class="material-symbols-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </span></a>
            </div>
          </div>
        </div>
        <div class="content">
          <h3>UNRI</h3>
          <p>Fill out the form and the algorithm will offer the right team of experts</p>
          <ul>
            <li style="--clr-tag:#DA4132;" class="branding">branding</li>
            <li style="--clr-tag:#FDF8F7;" class="packaging">packaging</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardVariantComp"
}

</script>

<style scoped lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

section {
  margin-inline: auto;
  color: #111;

  h2 {
    text-transform: capitalize;
    letter-spacing: 0.025em;
    font-size: clamp(2rem, 1.8125rem + 0.75vw, 2.6rem);
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 12px;


    .card {
      &:nth-child(1) .box .icon .iconBox {
        background: #DA4132;
      }
      &:nth-child(2) .box .icon .iconBox {
        background: #DA4132;
      }
      &:nth-child(3) .box .icon .iconBox {
        background: #DA4132;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.625rem;

        li {
          text-transform: uppercase;
          background: var(--clr-tag);
          color: #282828;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.375rem 0.625rem;
          border-radius: 0.12rem;
        }

        .branding {
          color: whitesmoke;
        }

        .packaging {
          color: darken(#70b3b1, 40%);
        }

        .marketing {
          color: darken(#d05fa2, 40%);
        }
      }

      .content {
        padding: 4px;

        h3 {
          font-size: 1.9rem;
          margin: 0;
          padding: 0;
          color: #DA4132;
          @media (max-width: 768px) {
            font-size: 1.4rem;
          }
          &-red {
            display: flex;
            justify-content: center;
          }
        }

        p {
          font-size: 1.1rem;
          color: darkcyan;
          margin: px 0px;
          @media (max-width: 768px) {
            font-size: 0.9rem;
            line-height: 23px;
            margin: 8px 0px;
          }
          &-1 {
            font-size: 1.4rem;
            color: #232222;
            font-weight: 600;
            padding: 0px;
            margin: 0px;
            text-align: center;
          }
          &-3 {
            font-size: 1rem;
            color: #232222;
            text-align: center;
          }
        }
      }
    }
    .card-inner {
      position: relative;
      width: inherit;
      height: 180px;
      background: var(--clr);
      border-radius: 4px;
      border-bottom-right-radius: 0;
      overflow: hidden;

      .box {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: .8rem;
        overflow: hidden;

        .imgBox {
          position: absolute;
          inset: 0;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .icon {
          position: absolute;
          bottom: -0.375rem;
          right: -0.375rem;
          width: 6rem;
          height: 6rem;
          background: var(--clr);
          border-top-left-radius: 50%;

          &:hover .iconBox {
            transform: scale(1.1);
          }

          &::before {
            position: absolute;
            content: "";
            bottom: 0.375rem;
            left: -1.25rem;
            background: transparent;
            width: 1.25rem;
            height: 1.25rem;
            border-bottom-right-radius: 1.25rem;
            box-shadow: 0.313rem 0.313rem 0 0.313rem #fff;
          }

          &::after {
            position: absolute;
            content: "";
            top: -1.25rem;
            right: 0.375rem;
            background: transparent;
            width: 1.25rem;
            height: 1.25rem;
            border-bottom-right-radius: 1.25rem;
            box-shadow: 0.313rem 0.313rem 0 0.313rem var(--clr);
          }

          .iconBox {
            position: absolute;
            inset: 0.625rem;
            background: #282828;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;

            span {
              color: #fff;
              font-size: 1.5rem;
            }
          }
        }
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr !important;
      
    }
  }
}

</style>