import * as API from './'

export default {
  word: {
    getPage: params => {
      return API.GET('word/getPage', params)
    },
    getWordByTagId: params => {
      return API.GET('word/getWordByTagId', params)
    }
  },
  chinese: {
    getPage: params => {
      return API.GET('chinese/getPage', params)
    }
  },
  wordToChinese: {
    getPage: params => {
      return API.GET('wordToChinese/getPage', params)
    }
  },
  wordType: {
    getPage: params => {
      return API.GET('wordType/getPage', params)
    }
  },
  wordToType: {
    getPage: params => {
      return API.GET('wordToType/getPage', params)
    }
  },
  wordTag: {
    getPage: params => {
      return API.GET('wordTag/getPage', params)
    },
    getTagByGroupId: params => {
      return API.GET('wordTag/getTagByGroupId', params)
    }
  },
  wordToTag: {
    getPage: params => {
      return API.GET('wordToTag/getPage', params)
    }
  },
  wordTagGroup: {
    getPage: params => {
      return API.GET('wordTagGroup/getPage', params)
    },
    list: params => {
      return API.GET('wordTagGroup/list', params)
    },

  },
}
