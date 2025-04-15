"use client";

export default function Home() {
  return (
    <>
      <h1 className="pink">猫の実態</h1>
      <p>
        可愛い蘭ちゃん
        <br />
        大食いです
        <br />
        ふわふわ
        <br />
      </p>
      <h2>猫は可愛い</h2>
      <h2 className="blue">ランちゃんの名前は梅川蘭です。</h2>
      <img src="/sakura.png" alt="sakura" />
      <a href="https://google.com">google</a>で検索
      <a href="https://google.com">
        <img src="/sakura.png" alt="sakura" />
      </a>
      <table>
        <tr>
          <th>プラン名</th>
          <th>料金</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>あああ</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
      <p>名前：</p>
      <input type="text" placeholder="苗字 名前" /> 性別：
      <input type="radio" name="gender" value="男" checked />
      <p>男</p>
      <input type="radio" name="gender" value="女" />女
      <input type="radio" name="gender" value="その他" />
      その他 好きな色：
      <input type="checkbox" name="color" value="red" checked />
      <p>赤</p>
      <input type="checkbox" name="color" value="red" />赤
      <input type="checkbox" name="color" value="red" />赤
      <input type="submit" value="送信" />
      <select name="blood type">
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      <textarea name="messeage" placeholder="メッセージを入力"></textarea>
      <div className="container">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item2">Item 1</div>
        <ul className="container-ul">
          <li>ss</li>
          <li>aa</li>
          <li>cc</li>
        </ul>
        <div className="item-1">Item 5</div>
      </div>
    </>
  );
}
