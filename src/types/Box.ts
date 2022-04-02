/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";

export interface BoxInterface extends ethers.utils.Interface {
  functions: {
    "retrieve()": FunctionFragment;
    "store(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "retrieve", values?: undefined): string;
  encodeFunctionData(functionFragment: "store", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "retrieve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;

  events: {
    "ValueChanged(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ValueChanged"): EventFragment;
}

export type ValueChangedEvent = TypedEvent<[BigNumber], { value: BigNumber }>;

export type ValueChangedEventFilter = TypedEventFilter<ValueChangedEvent>;

export interface Box extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BoxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    retrieve(overrides?: CallOverrides): Promise<[BigNumber]>;

    store(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  retrieve(overrides?: CallOverrides): Promise<BigNumber>;

  store(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    retrieve(overrides?: CallOverrides): Promise<BigNumber>;

    store(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ValueChanged(uint256)"(value?: null): ValueChangedEventFilter;
    ValueChanged(value?: null): ValueChangedEventFilter;
  };

  estimateGas: {
    retrieve(overrides?: CallOverrides): Promise<BigNumber>;

    store(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    retrieve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    store(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
