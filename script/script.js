class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
        <nav class="navbar navbar-expand-lg navbar-light" id="top">
            <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="../index.html"><img src="img/logo1.png"height="70px"></a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="../index.html">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="../mobile.html">MOBILES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="../watch.html">WATCHES</a>
                </li>
                <li class="nav-item cart">
                    <a class="nav-link" href="../cart.html"><i class="fas fa-dolly-flatbed fa-2x"></i><span>0</span></a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>
        `
    }
}
customElements.define('my-header',MyHeader)


// ==============================================================================================================
class PerRec extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="llogin text-center pt-4 pb-4">
      <p class="mb-0">See Personalised Recommandations</p>
      <a class="btn btn-warning btn-sm sign-btn" href="../login.html">Sign In</a>
      <p class="mb-0">New Customer? <a href="#">Register</a></p>
    </div>
        `
    }
}
customElements.define('per-rec',PerRec)


// ==============================================================================================================


class BackToTop extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="backtotop mb-0">
             <a href="#"><p class="text-white text-center p-2 mb-0">Back to Top</p></a>
            </div>
        `
    }
}
customElements.define('back-to-top',BackToTop)



// ==============================================================================================================

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <div class="footer container p-4 text-center">
                <div class="row d-flex">
                <div class="col-4">
                    <img src="img/logo1.png">
                    <p>Reach our customer executives at TollFree: 1800 180 000</p>
                </div>
                <div class="col-2">
                    <ul class="mt-4">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../mobile.html">Mobiles</a></li>
                    <li><a href="../watch.html">Watches</a></li>
                    <li><a href="../cart.html">Go To Cart</a></li>
                    </ul>
                </div>
                <div class="col-2">
                    <ul class="mt-4">
                    <li class="fw-bold fs-5">Connect With US</li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
                <div class="col-4">
                    <h4 class="mt-4 mb-4">Install App</h4>
                    <div class="row app-install">
                    <div class="col-6"><button class="btn btn-outline-primary btn-block"><i class="fab fa-google-play"></i>&nbsp&nbsp PlayStore</button></div>
                    <div class="col-6"><button class="btn btn-outline-success btn-block"><i class="fab fa-app-store-ios"></i>&nbsp&nbsp IOS</button></div>
                    </div>
                    
                </div>
                </div>
                <hr>
                <div class="mt-2 mb-2"><p>&copy copyright issued since 2022 <a href="../index.html">@Stockpile</a></p></div>
            </div>
        </footer>
        `
    }
}
customElements.define('my-footer',MyFooter)