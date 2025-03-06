import Header from '../components/Header';  
import Footer from '../components/Footer';  

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* External CSS Links */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* External JS Scripts */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.2/mdb.min.js"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          defer
        ></script>

        {/* Custom Inline JS Scripts */}
        <script>
          {/* Enable dropdowns on hover */}
          document.querySelectorAll('.navbar .dropdown').forEach(function(dropdown) {
            dropdown.addEventListener('mouseenter', function() {
              const dropdownMenu = dropdown.querySelector('.dropdown-menu');
              dropdownMenu.classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function() {
              const dropdownMenu = dropdown.querySelector('.dropdown-menu');
              dropdownMenu.classList.remove('show');
            });
          });
        </script>
        <script>
          jQuery("#coinslider").owlCarousel({
            autoplay: true,
            rewind: false,
            margin: 20,
            loop: true,
            responsiveClass: true,
            autoHeight: false,
            autoplayTimeout: 3000,
            smartSpeed: 800,
            nav: true,
            navText: [
              '<i className="fa-solid fa-angle-left fa-1x"></i>',
              '<i className="fa-solid fa-angle-right fa-1x"></i>',
            ],
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 3,
              },
              1024: {
                items: 4,
              },
              1366: {
                items: 6,
              },
            },
          });
        </script>
        <script>
          document.querySelectorAll('.accordion-header').forEach(button => {
            button.addEventListener('click', () => {
              const accordionContent = button.nextElementSibling;
              button.classList.toggle('active');
              if (button.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
              } else {
                accordionContent.style.maxHeight = 0;
              }

              // Close other open accordion items
              document.querySelectorAll('.accordion-header').forEach(otherButton => {
                if (otherButton !== button) {
                  otherButton.classList.remove('active');
                  otherButton.nextElementSibling.style.maxHeight = 0;
                }
              });
            });
          });
        </script>
        <script>
          // Highlight the active link in the navbar based on the current URL
          const currentPage = window.location.pathname.split('/').pop();
          const navLinks = document.querySelectorAll('.nav-link');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        </script>
      </body>
    </html>
  );
}
