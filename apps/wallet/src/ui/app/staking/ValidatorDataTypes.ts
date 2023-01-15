// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//TODO pull from the SDK
export type ValidatorMetadata = {
    type: '0x2::validator::ValidatorMetadata';
    fields: {
        name: string;
        net_address: string;
        next_epoch_stake: number;
        pubkey_bytes: string;
        sui_address: string;
        next_epoch_delegation: number;
        balance: Value;
        current_epoch_amount: number;
        epoch_counter: number;
    };
};

export type Validator = {
    type: '0x2::validator::Validator';
    fields: {
        delegation: bigint;
        delegation_count: number;
        metadata: ValidatorMetadata;
        pending_delegation: bigint;
        pending_delegation_withdraw: bigint;
        pending_delegator_count: number;
        pending_delegator_withdraw_count: number;
        pending_stake: number;
        commission_rate: number;
        pending_withdraw: bigint;
        stake_amount: bigint;
        delegation_staking_pool: {
            fields: {
                sui_balance: number;
                starting_epoch: number;
                delegation_token_supply: {
                    type: string;
                    fields: {
                        value: number;
                    };
                };
                pending_delegations: [
                    {
                        fields: {
                            delegator: string;
                            sui_amount: number | bigint;
                        };
                        type: string;
                    }
                ];
            };
        };
    };
};

export interface SuiSupplyFields {
    value: number;
}

export type SystemParams = {
    type: '0x2::sui_system::SystemParameters';
    fields: {
        max_validator_candidate_count: number;
        min_validator_stake: bigint;
    };
};

export type ValidatorState = {
    delegation_reward: number;
    epoch: number;
    id: { id: string; version: number };
    parameters: SystemParams;
    storage_fund: number;
    validators: {
        type: '0x2::validator_set::ValidatorSet';
        fields: {
            delegation_stake: bigint;
            active_validators: Validator[];
            next_epoch_validators: Validator[];
            pending_removals: string;
            pending_validators: string;
            quorum_stake_threshold: bigint;
            total_validator_stake: bigint;
        };
    };
    voting_power: string | null;

};


export interface DelegationStakingPoolFields {
    delegation_token_supply: SuiSupplyFields;
    pending_delegations: ContentsFields;
    pending_withdraws: PendingDelegationsFields;
    rewards_pool: Value;
    starting_epoch: number;
    sui_balance: number;
    validator_address: string;
}


export interface Value {
    value: number;
}

export interface PendingDelegationsFields {
    contents: ContentsFieldsWithdraw;
}

export interface ContentsFieldsWithdraw {
    id: string;
    size: number;
}

}

export interface ContentsFields {
    id: string;
    size: number;
    head: Vector;
    tail: Vector;
}

export interface Vector {
    vec: any[];
}

export interface NextEpochValidatorFields {
    consensus_address: number[];
    name: number[] | string;
    image_url?: number[] | string | null;
    description?: number[] | string | null;
    project_url?: number[] | string | null;
    net_address: number[];
    network_pubkey_bytes: number[];
    next_epoch_commission_rate: string;
}