import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('It loads the app into the DOM', () => {
    let wrapper
    const output = 'Foo'

    beforeEach(() => {
        wrapper = shallow(<App name="Foo" />)
    })

    it('renders the component', () => {
        expect(wrapper.length).toEqual(1)
    })

    it('contains a Foo', () => {
        expect(wrapper.contains('Foo')).toEqual(true)
    })
})