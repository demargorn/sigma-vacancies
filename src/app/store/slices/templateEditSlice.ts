import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { EditPollInfo, SegmentationOptions, SegmentationQuestion, TemplateQuestion } from '@/types/types';

const initialState: EditPollInfo = {
  templateId: '',
  id: '',
  userId: '',
  companyId: '',
  departmentId: '',
  adminHeading: '',
  adminDescription: '',
  pollName: '',
  pollDescription: '',
  finalHeading: '',
  finalDescription: '',
  themeColor: '',
  dateStart: null,
  dateEnd: null,
  active: false,
  segmentationQuestions: [],
  questions: [],
  isSegmentTeams: true,
  isSegmentExperience: true,
  private: false,
  single_answer: false
};

export const templateEditSlice = createSlice({
  name: 'templateEdit',
  initialState,
  reducers: {
    setPollId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    addTemplateId: (
      state,
      action: PayloadAction<{
        templateId: string;
      }>
    ) => {
      state.templateId = action.payload.templateId;
    },
    addAdminHeading: (
      state,
      action: PayloadAction<{
        adminHeading: string;
      }>
    ) => {
      state.adminHeading = action.payload.adminHeading;
    },
    addAdminDescription: (
      state,
      action: PayloadAction<{
        adminDescription: string;
      }>
    ) => {
      state.adminDescription = action.payload.adminDescription;
    },
    addUserId: (
      state,
      action: PayloadAction<{
        userId: string;
      }>
    ) => {
      state.userId = action.payload.userId;
    },
    addCompanyId: (
      state,
      action: PayloadAction<{
        companyId: string;
      }>
    ) => {
      state.companyId = action.payload.companyId;
    },
    addPollName: (
      state,
      action: PayloadAction<{
        pollName: string;
      }>
    ) => {
      state.pollName = action.payload.pollName;
    },
    addPollDescription: (
      state,
      action: PayloadAction<{
        pollDescription: string;
      }>
    ) => {
      state.pollDescription = action.payload.pollDescription;
    },
    addFinalHeading: (
      state,
      action: PayloadAction<{
        finalHeading: string;
      }>
    ) => {
      state.finalHeading = action.payload.finalHeading;
    },
    addFinalDescription: (
      state,
      action: PayloadAction<{
        finalDescription: string;
      }>
    ) => {
      state.finalDescription = action.payload.finalDescription;
    },
    addThemeColor: (
      state,
      action: PayloadAction<{
        themeColor: string;
      }>
    ) => {
      state.themeColor = action.payload.themeColor;
    },
    addDateStart: (
      state,
      action: PayloadAction<{
        dateStart: string | null;
      }>
    ) => {
      state.dateStart = action.payload.dateStart;
    },
    addDateEnd: (
      state,
      action: PayloadAction<{
        dateEnd: string | null;
      }>
    ) => {
      state.dateEnd = action.payload.dateEnd;
    },
    addActive: (
      state,
      action: PayloadAction<{
        active: boolean;
      }>
    ) => {
      state.active = action.payload.active;
    },
    addSegmentationQuestion: (
      state,
      action: PayloadAction<{
        question: SegmentationQuestion;
      }>
    ) => {
      state.segmentationQuestions.push(action.payload.question);
    },
    removeSegmentationQuestion: (
      state,
      action: PayloadAction<{
        index: number;
      }>
    ) => {
      state.segmentationQuestions.splice(action.payload.index, 1);
    },
    setSegmentation: (
      state,
      action: PayloadAction<{
        array: SegmentationQuestion[];
      }>
    ) => {
      state.segmentationQuestions = action.payload.array;
    },
    changeSegmentationOption: (
      state,
      action: PayloadAction<{
        text: string;
        questionIndex: number;
        optionIndex: number;
      }>
    ) => {
      if (state.segmentationQuestions[action.payload.questionIndex].options !== undefined) {
        state.segmentationQuestions[action.payload.questionIndex].options[action.payload.optionIndex].value = action.payload.text;
      }
    },
    deleteSegmentationOption: (
      state,
      action: PayloadAction<{
        questionIndex: number;
        optionIndex: number;
      }>
    ) => {
      state.segmentationQuestions[action.payload.questionIndex].options.splice(action.payload.optionIndex, 1);
    },
    addSegmentationOption: (
      state,
      action: PayloadAction<{
        option: SegmentationOptions;
        questionIndex: number;
      }>
    ) => {
      state.segmentationQuestions[action.payload.questionIndex].options.push(action.payload.option);
    },
    changeSegmentTeams: (state, action: PayloadAction<boolean>) => {
      state.isSegmentTeams = action.payload;
    },
    changeSegmentExperience: (state, action: PayloadAction<boolean>) => {
      state.isSegmentExperience = action.payload;
    },
    addQuestions: (
      state,
      action: PayloadAction<{
        questions: TemplateQuestion[];
      }>
    ) => {
      state.questions = action.payload.questions;
    },
    resetState: () => {
      return initialState;
    },
    setDepartmentId: (state, action: PayloadAction<string>) => {
      state.departmentId = action.payload;
    },
    setPrivate: (state, action: PayloadAction<boolean>) => {
      state.private = action.payload;
    },
    setSingleAnswer: (state, action: PayloadAction<boolean>) => {
      state.single_answer = action.payload;
    }
  }
});

const templateEditActions = templateEditSlice.actions;

export { templateEditActions };
export default templateEditSlice.reducer;
