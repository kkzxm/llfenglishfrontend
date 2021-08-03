let name = 'tagGroupList'

export default {
  getMenu () {
    return eval(localStorage.getItem(name))
  },
  setMenu (menus) {
    localStorage.setItem(name, JSON.stringify(menus))
  }
}
