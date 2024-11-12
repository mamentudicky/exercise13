import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Hero = () => {
  const [heroTitle, setHeroTitle] = useState("Default title");
  const [heroSubtitle, setHeroSubtitle] = useState("subtitle");

  useEffect(() => {
    const db = getDatabase();
    const heroRef = ref(db, "Features/Hero");
    
    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      setHeroTitle(data?.title || "Default title");
      setHeroSubtitle(data?.subtitle || "Default Subtitle");
    });
  }, []);

  return (
    <main className="site-content">
      <section className="hero section center-content illustration-section-01">
        <div className="container-sm">
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay={200}>
                {heroTitle}
              </h1>
              <div className="container-xs">
                <p className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay={400}>
                  {heroSubtitle}
                  <br /> Jurusan Informatika <br /> Tahun angkatan 2022
                </p>
              </div>
            </div>
            <div
              className="hero-figure reveal-from-bottom illustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay={800}
            >
              <img
                className="has-shadow"
                src={'data:image/jpeg;base64'}
                alt="Hero image"
                width={896}
                height={504}
              />
              <h1>yooo</h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="clients section reveal-fade">
        <div className="container">
          <div className="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul className="list-reset">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num}>
                  <img src={`images/clients-0${num}.svg`} alt={`Clients 0${num}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-tiles section">
        <div className="container">
          <div className="features-tiles-inner section-inner">
            <div className="tiles-wrap">
              {[1, 2, 3].map((num, idx) => (
                <div key={num} className="tiles-item reveal-from-bottom" data-reveal-delay={idx * 200}>
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <img
                          src={`images/feature-tile-icon-0${num}.svg`}
                          alt={`Feature tile icon 0${num}`}
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">Join the system</h4>
                      <p className="m-0 text-sm">
                        A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing section">
        <div className="container">
          <div className="pricing-inner section-inner has-top-divider">
            <div className="section-header center-content">
              <div className="container-xs">
                <h2 className="mt-0 mb-16">Simple, transparent pricing</h2>
                <p className="m-0">
                  Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
                </p>
              </div>
            </div>
            <div className="tiles-wrap">
              {[27, 47, 67].map((price, idx) => (
                <div key={price} className="tiles-item reveal-from-bottom" data-reveal-delay={idx * 200}>
                  <div className="tiles-item-inner has-shadow">
                    <div className="pricing-item-content">
                      <div className="pricing-item-header pb-24 mb-24">
                        <div className="pricing-item-price mb-4">
                          <span className="pricing-item-price-currency h2">$</span>
                          <span className="pricing-item-price-amount h1 pricing-switchable">
                            {price}
                          </span>
                        </div>
                        <div className="text-xs text-color-low">Lorem ipsum is a common text</div>
                      </div>
                      <div className="pricing-item-features mb-40">
                        <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        <ul className="pricing-item-features-list list-reset text-xs mb-32">
                          <li className="is-checked">Excepteur sint occaecat velit</li>
                          <li className="is-checked">Excepteur sint occaecat velit</li>
                          <li className="is-checked">Excepteur sint occaecat velit</li>
                          <li>Excepteur sint occaecat velit</li>
                          <li>Excepteur sint occaecat velit</li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-item-cta mb-8">
                      <a className="button button-primary button-block" href="#">
                        Start free trial
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
