import _ from 'lodash';

export class BSGenerator {
  public static generateRandomBS = () => {

    const BSList = ['Organic food is healthier and good to the environemnt', 'Trump is a great leader']


    return _.sample(BSList)




  }
}