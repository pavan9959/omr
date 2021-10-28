import { defineFeature, loadFeature} from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'
import {runEngine} from '../../../../framework/src/RunEngine'
import {Message} from "../../../../framework/src/Message"

import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum"; 
import React from "react";
import ComparabletheMarketApproach2 from "../../src/ComparabletheMarketApproach2"
const navigation = require("react-navigation")

const screenProps = {
    navigation: navigation,
    id: "ComparabletheMarketApproach2"
  }

const feature = loadFeature('./__tests__/features/ComparabletheMarketApproach2-scenario.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules()
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' }}))
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to ComparabletheMarketApproach2', ({ given, when, then }) => {
        let exampleBlockA:ShallowWrapper;
        let instance:ComparabletheMarketApproach2; 

        given('I am a User loading ComparabletheMarketApproach2', () => {
            exampleBlockA = shallow(<ComparabletheMarketApproach2 {...screenProps}/>)
        });

        when('I navigate to the ComparabletheMarketApproach2', () => {
             instance = exampleBlockA.instance() as ComparabletheMarketApproach2
        });

        then('ComparabletheMarketApproach2 will load with out errors', () => {
            expect(exampleBlockA).toBeTruthy()
            expect(exampleBlockA).toMatchSnapshot()
        });

        then('I can enter text with out errors', () => {
            let textInputComponent = exampleBlockA.findWhere((node) => node.prop('testID') === 'txtInput');
            textInputComponent.simulate('changeText', 'hello@aol.com');
            expect(exampleBlockA).toMatchSnapshot();
        });

        then('I can select the button with with out errors', () => {
            let buttonComponent = exampleBlockA.findWhere((node) => node.prop('testID') === 'btnExample');
            buttonComponent.simulate('press')
            expect(exampleBlockA).toMatchSnapshot();
            expect(instance.state.txtSavedValue).toEqual("hello@aol.com")
        });

        then('I can leave the screen with out errors', () => {
            instance.componentWillUnmount()
            expect(exampleBlockA).toBeTruthy()
            expect(exampleBlockA).toMatchSnapshot()
        });
    });


});
