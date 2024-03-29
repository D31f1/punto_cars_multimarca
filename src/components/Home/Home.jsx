const Home = () => {
    return (
        <div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
        <img src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023274/cld-sample-3.jpg" class="d-block w-100" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
        <img src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023274/cld-sample-2.jpg" class="d-block w-100" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </div>
        </div>
        <div class="carousel-item">
        <img src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023271/samples/cup-on-a-table.jpg" class="d-block w-100" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.6019019803684!2d-63.239934525568906!3d-32.37622337383365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc5d20d56f5401%3A0x38815a2257cde7ef!2sPunto%20Cars%20Multimarca!5e0!3m2!1ses!2sar!4v1708366936454!5m2!1ses!2sar" width="1000" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

    </iframe>
    </div>
)
};

export default Home;