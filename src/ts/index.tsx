import 'babel-polyfill'
import 'whatwg-fetch'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
require('@scss/styles')

const el = document.getElementById('app')

ReactDOM.render(<p className="text-blue-600">test</p>, el)
