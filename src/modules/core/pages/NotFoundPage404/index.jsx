import EyeMotion from 'src/modules/marvel-characters/components/EyeAnimation';
import './NotFoundPage404.scss';

const NotFoundPage404 = () => {
  return (
    <>
      <div className="not_found_container">
        <div className="not_found_flex">
          <div className="not_found_info">
            <div className="not_found_text">
              <h2>404 PAGE NOT FOUND</h2>
              <br />
              <h4>Not even the Eye of Uatu sees your request...</h4>
              <br />
              <p>
                Check that you typed the address correctly, go back to your previous page or try
                using our site searchg to find something specific.
              </p>
            </div>
          </div>
          <div className="not_found_img">
            <div className="Moverojo">
              <EyeMotion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage404;
