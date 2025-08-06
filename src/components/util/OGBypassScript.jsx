import { Helmet } from '@dr.pogodin/react-helmet';

const OGBypassScript = () => {
  return (
    <Helmet>
      <script src="/js/ogBypass.js" type="text/javascript" />
    </Helmet>
  );
};

export default OGBypassScript;