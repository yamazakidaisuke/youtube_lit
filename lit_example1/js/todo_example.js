import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
// import {LitElement, html} from 'lit';

export class Todo extends LitElement {
    //classで使うプロパティを設定
    static properties={

    }
    //コンストラクタを用意
    constructor(){
        super();
        
    } 
    //データ取得
    sendText(event){
        console.log("sendText");

    }
    //データを追加表示＋保存
    dataSave(event){
        console.log("dataSave");

    }
    //データ削除
    removeText(event){
        console.log("removeText");

    }
    //ページロード時にlocalStorageからデータを取得
    getLocaldata(){

    }
    //CSS
    static styles = css`
        li{
            padding:0.5rem 0.2rem;
            list-style: none;
            border-bottom:1px solid #ccc;
        }
    `;
    //表示処理
    render(){
        return html `

        `
    }
}
//HTMLのタグを生成
customElements.define('todo-app', Todo);