import axios from 'axios';

const instance = {
  styleGuide: axios.create({
    baseURL: `${
      window.location.protocol
    }//styleguide.effectivedigital.com/interview/api`
  })
};
export const request = (options, key = 'styleGuide') =>
  instance[key](options).then(({ data }) => data);
