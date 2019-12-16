<?php
/**
 * UserCashWithdrawals
 *
 * PHP version 5
 *
 * @category   PHP
 * @package    Base
 * @subpackage Model
 * @author     Agriya <info@agriya.com>
 * @copyright  2016 Agriya Infoway Private Ltd
 * @license    http://www.agriya.com/ Agriya Infoway Licence
 * @link       http://www.agriya.com
 */
namespace Models;

class UserCashWithdrawal extends AppModel
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user_cash_withdrawals';
    protected $casts = [
        'money_transfer_account_id' => 'integer',
        'user_id' => 'integer',
        'withdrawal_status_id' => 'integer',
        'amount' => 'double',
        'withdrawal_fee' => 'double'                            
    ];    
    protected $fillable = array(
        'user_id',
        'amount',
        'money_transfer_account_id',
        'withdrawal_status_id',
        'remark',
        'withdrawal_fee'
    );
    public $rules = array(
        'user_id' => 'sometimes|required|integer',
        'money_transfer_account_id' => 'sometimes|required|integer',
        'amount' => 'sometimes|required'
    );
    public function user()
    {
        return $this->belongsTo('Models\User', 'user_id', 'id')->select('id', 'username', 'email');
    }
    public function money_transfer_account()
    {
        return $this->belongsTo('Models\MoneyTransferAccount', 'money_transfer_account_id', 'id');
    }
    public function withdrawal_status()
    {
        return $this->belongsTo('Models\WithdrawalStatus', 'withdrawal_status_id', 'id');
    }
    protected static function boot()
    {
        global $authUser;
        parent::boot();
        static ::addGlobalScope('user', function (\Illuminate\Database\Eloquent\Builder $builder) use ($authUser) {
            if ($authUser['role_id'] != \Constants\ConstUserTypes::Admin) {
                $builder->where('user_id', $authUser['id']);
            }
        });
        self::saving(function ($data) use ($authUser) {
            if ($authUser['role_id'] == \Constants\ConstUserTypes::Admin || $authUser['id'] == $data->user_id) {
                return true;
            }
            return false;
        });
        self::deleting(function ($data) use ($authUser) {
            if ($authUser['role_id'] == \Constants\ConstUserTypes::Admin || $authUser['id'] == $data->user_id) {
                return true;
            }
            return false;
        });
    }
    public function scopeFilter($query, $params = array())
    {
        parent::scopeFilter($query, $params);
        if (!empty($params['user_id'])) {
            $query->where('user_id', $params['user_id']);
        }
        if (!empty($params['withdrawal_status_id'])) {
            $query->where('withdrawal_status_id', $params['withdrawal_status_id']);
        }
        if (!empty($params['money_transfer_account_id'])) {
            $query->where('money_transfer_account_id', $params['money_transfer_account_id']);
        }
        if (!empty($params['q'])) {
            $query->where(function ($q1) use ($params) {
                $search = $params['q'];
                $q1->WhereHas('user', function ($q) use ($search) {
                    $q->where('users.username', 'ilike', "%$search%");
                });
            });
        }
    }
}
