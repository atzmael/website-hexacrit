import { DateTime } from 'luxon';

const nl2br = (str: string) => {
    var breakTag = '<br>';
    var replaceStr = '$1'+ breakTag +'$2';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr)
}

const truncate = (str: string, length: number, ending?: string) => {
    str = str.replace(/(<([^>]+)>)/gi, "");
    return str.substr(0, length) + (!!ending ? ending : '');
}

const formatDate = (date: string, language: string, withText?: boolean) => {
    const monthsFormat = {
        'fr' : ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        'en' : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
    const newDate: any = DateTime.fromISO(date);
    switch(language){
        case 'fr':
            return !!withText ? `${newDate.toFormat('dd')} ${monthsFormat[language][newDate.toFormat('yy') - 1]} ${newDate.toFormat('yyyy')}` : newDate.toFormat('dd.LL.yyyy');
        break;
        case 'en':
            return !!withText ? `${monthsFormat[language][newDate.toFormat('yy') - 1]} ${newDate.toFormat('dd')}, ${newDate.toFormat('yyyy')}` : newDate.toFormat('yyyy.LL.dd');
        break;
    }
}

const ucFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const formatNumber = (num: any, type: string) => {
    let indice: string = '';
    if (1000 > num) {
        return `<span class="stat-num">${num}</span>`;
    } else if (1000000 > num) {
        switch(type){
            case 'thousand':
                num = num.toLocaleString('fr-FR');//number_format(num, 0, '.', '.');
            break;
            case 'minified':
            default:
                indice = '<span class="stat-indice">k</span>';
                num = Math.round(num / 1000).toFixed(1);
        }

        return `<span class="stat-num">${num}</span>${indice}`;
    } else if (1000000000 > num) {
        switch(type){
            case 'thousand':
                num = num.toLocaleString('fr-FR'); //number_format(num, 0, '.', ' ');
            break;
            case 'minified':
            default:
                indice = '<span class="stat-indice">M</span>';
                num = Math.round(num / 1000000).toFixed(1);
        }
        return `<span class="stat-num">${num}</span>${indice}`;
    }
    return num;
}

const striptags = (str: string) => {
    return str.replace(/(<([^>]+)>)/gi, "");
}

const setQueryParameters = (parameters: any) => {
    let params = '';
    if('object' === typeof parameters){
        params = Object.keys(parameters).map(function(key) {
            return key + '=' + encodeURIComponent(parameters[key]);
        }).join('&');
    }

    return ('' !== params) ? '?' + params : '';
}

const getQueryParams = () => {
    let queryParams: any = {};
    if('undefined' !== typeof document){
      document.location.search
        .replace(/\?/, '')
        .split(/&/)
        .forEach((q: any) => {
          const qq: any = q.split(/=/);
          queryParams[qq[0]] = decodeURIComponent(qq[1])
        });
    }
    return queryParams;
  }

export { nl2br, truncate, formatDate, ucFirst, formatNumber, striptags, getQueryParams, setQueryParameters}