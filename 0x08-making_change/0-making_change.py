#!/usr/bin/python3
"""Function determines the fewest number of coins needed
    to achieve a given amount
"""


def makeChange(coins, total):
    """Function takes a list of coins and calculate change from total
    """
    if total <= 0:
        return 0

    else:
        coin = sorted(coins)
        coin.reverse()
        counter = 0
        for i in coin:
            while(total >= i):
                counter += 1
                total -= i
        if total == 0:
            return counter
        return -1
