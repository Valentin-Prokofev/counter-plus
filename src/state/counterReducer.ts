
const initialState = {
    currentValue: 0,
    startValue: 2,
    maxValue: 6,
    pressSet: false,
    error: false,
}

type InitialStateType = typeof initialState
type ActionType = IncValueActionType
    | ResetValueActionType
    | SetValueActionType
    | SetValueFromLocalStorageActionType
    | ChangeStartValueActionType
    | ChangeMaxValueActionType
    | ChangePressSetActionType
    | ChangeErrorSetActionType

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {...state, currentValue: state.currentValue + 1}
        case "RESET-VALUE":
            return {...state, currentValue: action.payload.value}
        case "SET-VALUE":
            return {...state, currentValue: action.payload.value}
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {...state, currentValue: action.payload.value}
        case "CHANGE-START-VALUE":
            return {...state, startValue: action.payload.value}
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: action.payload.value}
        case "CHANGE-PRESS-SET-STATUS":
            return {...state, pressSet: action.payload.pressSet}
        case "CHANGE-ERROR-STATUS":
            return {...state, error: action.payload.error}
        default :
            return state
    }
}

export const incCounterValueAC = () => {
    return {
        type: "INC-VALUE",
    } as const
}

export const resetCounterValueAC = (startValue: number) => {
    return {
        type: "RESET-VALUE",
        payload: {
            value: startValue,
        },
    } as const
}

export const setValueAC = (startValue: number) => {
    return {
        type: "SET-VALUE",
        payload: {
            value: startValue,
        },
    } as const
}

export const setValueFromLocalStorageAC = (valueLocalStorage: number) => {
    return {
        type: "SET-VALUE-FROM-LOCAL-STORAGE",
        payload: {
            value: valueLocalStorage,
        },
    } as const
}

export const changeStartValueAC = (startValue: number) => {
    return {
        type: "CHANGE-START-VALUE",
        payload: {
            value: startValue,
        },
    } as const
}

export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: "CHANGE-MAX-VALUE",
        payload: {
            value: maxValue,
        },
    } as const
}

export const pressSetChangeAC = (pressSet: boolean) => {
    return {
        type: "CHANGE-PRESS-SET-STATUS",
        payload: {
            pressSet
        }
    } as const
}

export const changeErrorAC = (error: boolean) => {
    return {
        type: "CHANGE-ERROR-STATUS",
        payload: {
            error
        }
    } as const
}


export type IncValueActionType = ReturnType<typeof incCounterValueAC>
export type ResetValueActionType = ReturnType<typeof resetCounterValueAC>
export type SetValueActionType = ReturnType<typeof setValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>
export type ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>
export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
export type ChangePressSetActionType = ReturnType<typeof pressSetChangeAC>
export type ChangeErrorSetActionType = ReturnType<typeof changeErrorAC>



