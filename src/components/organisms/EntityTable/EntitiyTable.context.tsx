import React, { createContext, useCallback, useContext, useReducer } from "react";

type Context = {
  selectedEntityIndexes: number[];
  toggleSelectedEntity: (selectedEntityIndex: number) => void;
  resetSelectedEntities: () => void;
  setSelectEntities: (selecteEntityIndexes: number[]) => void;
};

type Action = {
  type: typeof ACTION[keyof typeof ACTION];
  value?: number | number[];
}

const ACTION = {
  RESET: 'reset',
  REPLACE: 'replace',
  TOGGLE: 'toggle'
} as const;

const EntityTableContext = createContext<Context>(
  {
    selectedEntityIndexes: [],
    toggleSelectedEntity: () => {},
    resetSelectedEntities: () => {},
    setSelectEntities: () => {}
  }
);

const toggleArray = <T,>(array: T[], value: T): T[] => {
  const newArray = [...array];
  const index = newArray.indexOf(value);
  if (index !== -1)  {
    newArray.splice(index, 1);
  } else {
    newArray.push(value);
  }
  return newArray;
};

const setSelectedEntityIndexes = (selectedEntityIndexes: Context['selectedEntityIndexes'], action: Action) => {
  console.log(action.type);
  switch(action.type) {
    case ACTION.REPLACE:
      if (typeof action.value === 'undefined') return selectedEntityIndexes;
      const valueAsArray = typeof action.value === 'number' ? [action.value] : action.value;
      return valueAsArray;
    case ACTION.TOGGLE:
      if (typeof action.value === 'undefined') return selectedEntityIndexes;
      const valueAsNumber = typeof action.value === 'number' ? action.value : (action.value.shift());
      if (typeof valueAsNumber === 'undefined') return selectedEntityIndexes;
      return toggleArray<number>(selectedEntityIndexes, valueAsNumber);
    case ACTION.RESET:
    default:
      return [];

  }
}

const useProvideEntityTableContext = (): Context => {
  const [selectedEntityIndexes, dispatch] = useReducer(setSelectedEntityIndexes,[] as number[]);
  console.log(selectedEntityIndexes);

  const toggleSelectedEntity = useCallback((selecteEntityIndex: number) => {
    dispatch({
      type: ACTION.TOGGLE,
      value: selecteEntityIndex
    })
  }, [selectedEntityIndexes]);

  const resetSelectedEntities = useCallback(() => {
    dispatch({
      type: ACTION.RESET,
    })
  }, []);

  const setSelectEntities = useCallback((selecteEntityIndexes: number[]) => {
    dispatch({
      type: ACTION.REPLACE,
      value: selecteEntityIndexes
    })
  }, [])

  return {
    selectedEntityIndexes,
    toggleSelectedEntity,
    resetSelectedEntities,
    setSelectEntities
  }
}

export const EntityTableContextProvider: React.FC = ({ children }) => {
  const value = useProvideEntityTableContext();

  return (
    <EntityTableContext.Provider value={value}>
      {children}
    </EntityTableContext.Provider>
  );
}

export const useEntityTableContext = () => {
  return useContext(EntityTableContext);
}