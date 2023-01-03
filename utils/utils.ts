import cnfg from '../config'

export class Utils {
  config() {
    return cnfg[cnfg.env]
  }

  getAttributeInt(data: any, attr: string) {
    return parseInt(data[attr].toString().split('.')[0], 10).toLocaleString()
  }

  getAttributeDecimal(data: any, attr: string) {
    return data[attr].toString().split('.')[1]
  }
}

const utils = new Utils()

export { utils }
