import React from 'react'

import {
  doSearch
} from '../actions'

export default class Main extends React.Component {
  renderMedias(row, i) {
    return (
      <option key={ i }>{ row }</option>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>サービス名</h1>
        <div className="row">
          <div className="col-lg-7">
            <div className="well bs-component">
              {/* TODO どうしてもsubmitでページ遷移してしまうためformタグをdivタグに変更した */}
              <div className="form-horizontal">
                <fieldset>
                  <legend>入力フォーム</legend>

                  {/* media */}
                  <div className="form-group">
                    <label htmlFor="media" className="col-lg-2 control-label">Media</label>
                    <div className="col-lg-10">
                      <select className="form-control" id="media" ref="media">
                        { this.props.medias.map((row, i) => this.renderMedias(row, i)) }
                      </select>
                    </div>
                  </div>

                  {/* start */}
                  <div className="form-group">
                    <label htmlFor="start" className="col-lg-2 control-label">Start</label>
                    <div className="col-lg-10">
                      <input type="text" className="form-control" id="start" ref="start" placeholder="YYYY-MM-DD HH:mm:ss" />
                    </div>
                  </div>

                  {/* end */}
                  <div className="form-group">
                    <label htmlFor="end" className="col-lg-2 control-label">End</label>
                    <div className="col-lg-10">
                      <input type="text" className="form-control" id="end" ref="end" placeholder="YYYY-MM-DD HH:mm:ss" />
                    </div>
                  </div>

                  {/* q */}
                  <div className="form-group">
                    <label htmlFor="q" className="col-lg-2 control-label">Query</label>
                    <div className="col-lg-10">
                      <textarea className="form-control" rows="5" id="q" ref="q" placeholder="example: (トヨタ OR TOYOTA) AND CM NOT 無料"></textarea>
                      <span className="help-block">
                        AND/OR/NOT/GROUP検索が可能です
                      </span>
                    </div>
                  </div>

                  {/* submit */}
                  <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                      {/* TODO bindによって引数を受け渡す方法が理解できておらず暫定対処 */}
                      <button className="btn btn-primary" onClick={ () => this.props.doSearch(this.refs) }>Submit</button>
                    </div>
                  </div>

                </fieldset>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <legend>入力結果</legend>
            <div id="result">
              <div className="alert alert-dismissible alert-info">
                <h4>Media</h4>
                <p>{ this.props.media }</p>
              </div>

              <div className="alert alert-dismissible alert-info">
                <h4>Start</h4>
                <p>{ this.props.start }</p>
              </div>

              <div className="alert alert-dismissible alert-info">
                <h4>End</h4>
                <p>{ this.props.end }</p>
              </div>

              <div className="alert alert-dismissible alert-info">
                <h4>Query</h4>
                <p>{ this.props.q }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
