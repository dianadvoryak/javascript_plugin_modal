import './modal.css'


export class Modal{
  constructor(selector, options){
    this.$btn = document.querySelector(selector)
    this.options = options
    this.$modal = this.#createModal(this.options)
    this.$closes = this.$modal.querySelectorAll('[data-type="close"]')
    this.#render()

  }

  #createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('modal-plagin')
    modal.insertAdjacentHTML('afterbegin', `
      <div class="modal-overlay" data-type="close">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">${options.title ? options.title : 'Modal title'}</span>
            <span class="modal-close" data-type="close">&times;</span>
          </div>
          <div class="modal-body">
            ${options.data ? options.data : 'Modal body'}
          </div>
          <div class="modal-footer">
            ${options.footer ? options.footer : ''}
          </div>
        </div>
      </div>
    `)
    document.body.appendChild(modal)
    return modal
  }

  #render(){
    this.heandlerClick = this.clickHandler.bind(this)
    this.$btn.addEventListener('click', () => this.open())
    this.$closes.forEach(item => item.addEventListener('click', this.heandlerClick
      ))
  }

  clickHandler(event){
    const {type} = event.target.dataset
    
    if(type === 'close'){
      this.close()
      event.stopPropagation()
    } 
  }

  open(){
    this.$modal.classList.add('open')
  }

  close(e){
    this.$modal.classList.remove('open')
    this.$modal.classList.add('hide')
    setTimeout(() => {
      this.$modal.classList.remove('hide')
      this.destroy()
    }, 500)
  }

  destroy(){
    this.$closes.forEach(item => item.removeEventListener('click', () => this.heandlerClose()))
  }
  

}

